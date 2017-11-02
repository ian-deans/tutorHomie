require('dotenv').config()
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'

import studentRouter from './routes/studentRouter'
import classCodeRouter from './routes/classCodeRouter'

const server = express()
const port = process.env.PORT || 4040


server.set('port', port)

server.use(logger('dev'))
server.use(bodyParser.json())
// server.use(server.json())
server.use(express.static(path.join(__dirname, '/public')))


server.use('/', router)


server.use((request, response, next) => {
  let error = new Error('I ain\'t got it, so you can\'t get it. Lets leave it at that, cuz I ain\'t wit it.')
server.use(cors())
server.use(logger('dev'))
server.use(bodyParser.json())

server.use(express.static(path.join(__dirname, '/public')))



server.use('/students', studentRouter)
server.use('/classcodes', classCodeRouter)


server.use((request, response, next) => {
  let error = new Error("I ain't got it, so you can't get it. Lets leave it at that, cuz I ain't wit it.")
  error.status = 404
  next(error)
})

server.use((request, response) => {
  response.status(500)
    .json({
      status: 500,
      message: 'Internal Server Error',
    })
})

server.listen(port, () => {
  console.log(`Starting webserver on port ${port}...`)
})
