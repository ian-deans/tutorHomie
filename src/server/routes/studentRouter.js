import express from 'express'
import controller from '../controllers/studentController'

export default express.Router()
  .post('/', controller.add)
  .get('/', controller.findAll)
  .get('/:id', controller.findOne)
  .put('/:id', controller.update)
  // .put('/activate', controller.activate)
  // .put('/deactivate', controller.deactivate)
  .delete('/:id', controller.delete)