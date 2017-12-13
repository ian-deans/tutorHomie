import db from '../db'

export default {
  add: sessionData => {
    console.log(sessionData)
    return db('sessions')
      .insert(sessionData)
      .returning('*')},

  findAll: () =>
    db('sessions'),

  findOne: id =>
    db('sessions')
      .where({id}),

  update: (id, newValues) =>
    db('sessions')
      .where({id})
      .update({...newValues})
      .returning('*'),

  delete: id =>
    db('sessions')
      .where({id})
      .del()
}
