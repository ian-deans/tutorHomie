import mongoose from 'mongoose'
import db from '../db'

const StudentSchema = new mongoose.Schema({
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
  classCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClassCode',
    // required: true
  },
  handle: {
    type: String,
    required: false
  },
  active: {
    type: Boolean,
    default: true
  },
  surveyString: {
    type: String
  },
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
    required: true
  }
})
export default db.model('Student', StudentSchema)
