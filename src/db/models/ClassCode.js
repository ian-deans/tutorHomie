import mongoose from 'mongoose'
import db from '../db'

const ClassCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  value: { type: String, requires: true, unique: true }
})

const ClassCode = db.model('ClassCode', ClassCodeSchema)

export default ClassCode
