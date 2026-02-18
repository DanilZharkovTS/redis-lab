import type { Request, Response } from 'express'
import { getPostsService } from './service'

export const getPostsController = async (req: Request, res: Response) => {
  try {
    const result = await getPostsService()
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json('Internal server error')
  }
}
