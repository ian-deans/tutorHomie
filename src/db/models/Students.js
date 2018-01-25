import db from '../db'

export default {
  add: student =>
    db('students')
      .insert(student)
      .returning('*'),

  findAll: () =>
    db('students')
      .where({active: true})
      .orderBy('name', 'asc'),

  findOne: id =>
    db('students')
      .where({id:id}),

  update: (id, newValues) =>
    db('students')
      .where({id})
      .update({...newValues})
      .returning('*'),

  delete: id =>
    db('students')
      .where({id:id})
      .del(),

  activate: id =>
    db('students')
      .where({id:id})
      .update({active: true})
      .returning('*'),

  deactivate: id =>
    db('students')
      .where({id: id})
      .update({active: false})
      .returning('*'),
}
