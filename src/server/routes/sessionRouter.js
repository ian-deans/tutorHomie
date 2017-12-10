import express from 'express'
import controller from '../controllers/sessionController'

export default express.Router()
  .post('/', controller.add)
  .get('/', controller.findAll)
  .get('/:id', controller.findOne)
  .put('/', controller.update)
  .delete('/', controller.delete)
