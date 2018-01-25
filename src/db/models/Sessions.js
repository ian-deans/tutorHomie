import db from '../db'

export default {
  add: sessionData => {
    return db('sessions')
      .insert(sessionData)
      .returning('*')},

  findAll: () =>
    db
      .select('sessions.*', 'session_status.text as status')
      .from('sessions')
      .leftJoin('session_status', 'sessions.status', 'session_status.id')
      .orderBy('datetime', 'desc'),

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
