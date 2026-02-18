import express, { Response } from 'express'

const app = express()

app.get('/', (res: Response) => {
  res.send('Redis lab running!')
})

app.listen(3000, () => {
  console.log('App is running on port 3000')
})
