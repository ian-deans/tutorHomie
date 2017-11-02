import express from 'express'
import path from 'path'
import Students from '../../db/models/Students'

const studentRouter = express.Router()

studentRouter
  .get('/', async (request, response) => {
    const students = await Students.findAll()
    response.json(students)
  })
  // .post()

export default studentRouter
