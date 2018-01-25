import db from '../db'

export default {
  findAll: () =>
    db('session_status')
}