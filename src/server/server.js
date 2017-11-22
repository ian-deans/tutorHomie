import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import router from './routes'
import path from 'path'


const server = express()
const port = 4040


server.set('port', port)

server.use(logger('dev'))
server.use(bodyParser.json())
// server.use(server.json())
server.use(express.static(path.join(__dirname, '/public')))


server.use('/', router)


server.use((request, response, next) => {
  let error = new Error('I ain\'t got it, so you can\'t get it. Lets leave it at that, cuz I ain\'t wit it.')
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
