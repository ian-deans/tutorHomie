import express from 'express'
import controller from '../controllers/classCodeController'

export default express.Router()
  .post('/', controller.add)
  .get('/', controller.getAll)
  .get('/:code', controller.getByCode)
  .put('/', controller.update)
  .delete('/', controller.delete)
  .delete('/clean', controller.clearNulls) //TODO: remove this route 

