import express from 'express'
import controller from '../controllers/student'

export default express.Router()
  .post('/', controller.add)
  .get('/', controller.getAll)
  .get('/:id', controller.findById)
  .get('/name/:name', controller.findByName)
  .get('/email/:email', controller.findByEmail)
  .put('/:id', controller.update)
  // .put('/activate', controller.activate)
  // .put('/deactivate', controller.deactivate)
  .delete('/:id', controller.delete)