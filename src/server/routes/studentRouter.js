import express from 'express'
import studentController from '../controllers/studentController'

const studentRouter = express.Router()

studentRouter
  .post('/', studentController.add)
  .get('/', studentController.findAll)
  .get('/:id', studentController.findOne)
  .put('/', studentController.update)
  // .put('/activate', studentController.activate)
  // .put('/deactivate', studentController.deactivate)
  .delete('/', studentController.delete)

export default studentRouter
