import express from 'express'
import classCodeController from '../controllers/classCodeController'

const classCodeRouter = express.Router()

classCodeRouter
  .get('/', classCodeController.getAll)
  .get('/:code', classCodeController.getByCode)
  // .post()

export default classCodeRouter
