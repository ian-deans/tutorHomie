import express from 'express'

export default express.Router()
  .get('/', (request, response) => {
    response.sendFile('index.html')
  })