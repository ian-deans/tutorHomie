import db from './db'

const ClassCodes = {
  add: classCode => db('class_codes').insert(classCode),
  findAll: () => db('class_codes').select('*'),
  findByCode: code => db('class_codes').select('*').where({code: code}),
  update: (code, newVals) => db('class_codes').where({code: code}).update({...newVals}),
  delete: code => db('class_codes').where({code}).del()  
}

export default ClassCodes