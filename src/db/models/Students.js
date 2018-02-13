import db from '../db'

export default {
  add: student =>
    db('students')
      .insert(student)
      .returning('*'),

  findAll: () =>
    db
      .select("students.*", "class_codes.value")
      .from('students')
      .leftJoin('class_codes', 'students.class_code', 'class_codes.code')
      .where({active: true})
      .orderBy('students.name', 'asc'),

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
