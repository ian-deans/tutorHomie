import mongoose from 'mongoose'
import db from '../db'
import Student from './Student'

const TutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  handle: {
    type: String,
    requred: true,
    unique: true,
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }],
})

export default db.model('Tutor', TutorSchema)