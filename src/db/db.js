import mongoose from 'mongoose'
mongoose.Promise = Promise
//TODO: Look into why the db host is not being pulled from .env
mongoose.connect(`mongodb://localhost/tutor_homie`)
const db = mongoose.connection

db.on('error', error => console.log('Mongoose Error: ', error))
db.once('open', () => console.log('Mongoose connected.'))

export default db
