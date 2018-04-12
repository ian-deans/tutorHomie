import mongoose from 'mongoose'
mongoose.Promise = Promise
mongoose.connect(`mongodb://${process.env.DB_HOST}/tutor_homie`)
const db = mongoose.connection

db.on('error', error => console.log('Mongoose Error: ', error))
db.once('open', () => console.log('Mongoose connected.'))

export default db
