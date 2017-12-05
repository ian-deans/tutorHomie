import db from '../db'

const ClassCodes = {
  add: classCode => 
    db('class_codes')
      .insert(classCode)
      .returning('*'),

  findAll: () => 
    db('class_codes')
      .select('*'),

  findByCode: code => 
    db('class_codes')
      .select('*')
      .where({code: code}),

  update: (code, newValues) => 
    db('class_codes')
      .where({code: code})
      .update({...newValues})
      .returning('*'),

  delete: code => 
    db('class_codes')
      .where({code})
      .del(), 

  clearNulls: () =>
    db('class_codes')
      .whereNull('code')
      .del()
}

export default ClassCodes
