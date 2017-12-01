import express from 'express'
import classCodeController from '../controllers/classCodeController'

const classCodeRouter = express.Router()

classCodeRouter
  .post('/', classCodeController.add)
  .get('/', classCodeController.getAll)
  .get('/:code', classCodeController.getByCode)
  // .put()
  // .delete()

export default classCodeRouter
