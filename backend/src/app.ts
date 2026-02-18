import express from 'express'
import { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json('Redis lab running!')
})

app.listen(3000, () => {
  console.log('App is running on port 3000')
})
