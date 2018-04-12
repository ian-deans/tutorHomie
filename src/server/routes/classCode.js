import express from 'express'
import controller from '../controllers/classCode'

export default express.Router()
  .post('/', controller.add)
  .get('/', controller.getAll)
  .get('/:code', controller.getByCode)
  .put('/:code', controller.update)
  .delete('/:code', controller.delete)
  // .delete('/clean', controller.clearNulls) //TODO: remove this route 

