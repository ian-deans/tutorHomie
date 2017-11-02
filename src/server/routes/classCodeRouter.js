import express from 'express'
import path from 'path'
import ClassCodes from '../../db/models/ClassCodes'

const classCodeRouter = express.Router()

classCodeRouter
  .get('/', async (request, response) => {
    const classcodes = await ClassCodes.findAll()
    response.json(classcodes)
  })
  // .post()

export default classCodeRouter
