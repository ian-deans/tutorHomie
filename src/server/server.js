require('dotenv').config()
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'

// import studentRouter from './routes/studentRouter'
import classCodeRouter from './routes/classCodeRouter'
// import sessionRouter from './routes/sessionRouter'
// import sessionStatusRouter from './routes/sessionStatusRouter'

const server = express()
const port = process.env.PORT || 4000


server.set('port', port)

server.use(cors())
server.use(logger('dev'))
server.use(bodyParser.json())

server.use(express.static(path.join(__dirname, '/public')))



// server.use('/students', studentRouter)
server.use('/classcodes', classCodeRouter)
// server.use('/sessions', sessionRouter)
// server.use('/sessionstatus', sessionStatusRouter)


server.use((request, response, next) => {
  let error = new Error("I ain't got it, so you can't get it. Lets leave it at that, cuz I ain't wit it.")
  error.status = 404
  next(error)
})

server.use((error, request, response) => {
  if (error) {
    console.log(error)
  }
  response.status(error.status || 500)
    .json({
      message: error.message || 'Internal Server Error',
    })
})

server.listen(port, () => {
  console.log(`-> Webserver started on port ${port}.`)
})
