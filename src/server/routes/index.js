import express from 'express'
import path from 'path'

const router = express.Router()

router.get('/', (request, response) => {
  response.sendFile('index.html')
})

export default router