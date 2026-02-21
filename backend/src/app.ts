import express from 'express'
import { getPostsController, resetPostsController } from './app/controller'
import { rateLimiter } from './app/middleware'

const app = express()

app.get('/get', rateLimiter(10, 30, 'getPosts'), getPostsController)
app.delete('/reset', rateLimiter(10, 30, 'resetPosts'), resetPostsController)

app.listen(3000, () => {
  console.log('App is running on port 3000')
})
