import express from 'express'
import { getPostsController, resetPostsController } from './app/controller'

const app = express()

app.get('/', getPostsController)
app.delete('/reset', resetPostsController)

app.listen(3000, () => {
  console.log('App is running on port 3000')
})
