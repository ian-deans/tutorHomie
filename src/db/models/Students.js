import db from '../db'

const Students = {

  add: async student => {
    if (!student) {
      throw new Error('Must provide a student object.')
    }
    if (_isMissingKeys(student)) {
      throw new Error('Must provide all necessary keys.')
    }

    try {
      db('students').insert(student)
    } catch(error) {
      throw new Error(`Problem encountered when attempting to insert studet: ${student}`)
    }

    return {status: 'success', message: `Added new student to database. \n${student}`}
  },
  findAll: () => db.select().from('students'),
  findByEmail: email => db('students').where({email: email}),
  update: (email, newVals) => db('students').where({email}).update({...newVals}),
  delete: email => db('students').where({email:email}).del(),

  activate: email => db('students').where({email:email}).update({active: true}),
  deactivate: email => db('students').where({email: email}).update({active: false}),
}

export default Students




const _isMissingKeys = student => {
  if (!Object.keys(student).includes('email')) {
    return true
  }
  else if (!Object.keys(student).includes('name')) {
    return true
  }
  else if (!Object.keys(student).includes('class_code')) {
    return true
  }
  else if (!Object.keys(student).includes('handle')) {
    return true
  }
  else if (!Object.keys(student).includes('grad_date')) {
    return true
  }
  else if (!Object.keys(student).includes('invited_to_slack')) {
    return true
  }
  else if (!Object.keys(student).includes('active')) {
    return true
  }

  return false
}
