import express from 'express'
import controller from '../controllers/sessionStatusController'

export default express.Router()
  .get('/', controller.findAll)