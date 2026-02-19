import { redisClient } from '../lib/redisClient'
import storagePosts from '../lib/storage'

export const getPostsService = async () => {
  console.log('SERVICE HIT')

  const redisPosts = await redisClient.get('posts')

  if (!redisPosts) {
    console.log('HIT STORAGE POSTS')

    await redisClient.set('posts', JSON.stringify(storagePosts), 'EX', 3000)

    console.log('FINISH STORAGE POSTS')
    return { posts: storagePosts }
  }
  console.log('FINISH REDIS POSTS')

  return { posts: JSON.parse(redisPosts) }
}

export const resetPostsService = async () => {
  const redisPosts = await redisClient.get('posts')
  if (!redisPosts) return

  await redisClient.del('posts')
}
