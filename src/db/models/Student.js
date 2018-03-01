import mongoose from 'mongoose'
import db from '../db'

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  classCode: { type: mongoose.Schema.Types.ObjectId, ref: 'ClassCode' },
  handle: { type: String, required: false },
  active: { type: Boolean,  default: true},
  surveyString: { type: String }
})

const Student = db.model('Student', StudentSchema)

export default Student