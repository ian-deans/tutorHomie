import express from 'express'
import studentController from '../controllers/studentController'

const studentRouter = express.Router()

studentRouter
// .post()
  .get('/', studentController.findAll)
  .get('/one', studentController.findOne)

export default studentRouter
