import mongoose from 'mongoose'
import db from '../db'

const ClassCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  value: { type: String, required: false, unique: false }
})

const ClassCode = db.model('ClassCode', ClassCodeSchema)

export default ClassCode
