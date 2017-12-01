import db from '../db'

const Students = {

  add: student => db('students').insert(student).returning('*'),
  findAll: () => db.select().from('students'),
  findOne: query => db('students').where({[query.key]: query.value}),
  update: (email, newVals) => db('students').where({email}).update({...newVals}),
  delete: email => db('students').where({email:email}).del(),
  activate: email => db('students').where({email:email}).update({active: true}),
  deactivate: email => db('students').where({email: email}).update({active: false}),
}

export default Students
