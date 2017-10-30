import db from './db'

const Students = {

  add: student => db('students').insert(student),
  findAll: () => db.select().from('students'),
  findByEmail: email => db('students').where({email: email}),
  update: (email, newVals) => db('students').where({email}).update({...newVals}),
  delete: email => db('students').where({email:email}).del(),

  activate: email => db('students').where({email:email}).update({active: true}),
  deactivate: email => db('students').where({email: email}).update({active: false}),
}

export default Students