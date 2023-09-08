import express from 'express'
import { characterRouter } from './character/character.routes.js'

const app = express()
app.use(express.json())

app.use('/api/characters', characterRouter)

app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})
