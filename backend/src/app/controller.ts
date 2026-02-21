import type { Request, Response } from 'express'
import { getPostsService, resetPostsService } from './service'

export const getPostsController = async (req: Request, res: Response) => {
  try {
    const result = await getPostsService()
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json('Internal server error')
  }
}

export const resetPostsController = async (req: Request, res: Response) => {
  try {
    await resetPostsService()
    res.sendStatus(200)
  } catch (err) {
        res.status(500).json('Internal server error')

  }
}
