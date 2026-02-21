import type { NextFunction, Request, Response } from 'express'
import { redisClient } from '../lib/redisClient'

export const rateLimiter = (
  limit: number,
  window: number,
  endpoint: string
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip
    const key = `rate:${endpoint}:${ip}`

    const requests = await redisClient.incr(key)

    if (requests === 1) {
      await redisClient.expire(key, window)
    }

    if (requests > limit) {
      return res.status(429).json('Too many requests')
    }
    next()
  }
}
