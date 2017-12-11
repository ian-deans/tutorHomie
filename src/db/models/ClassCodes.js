import db from '../db'

export default {
  add: classCode => 
    db('class_codes')
      .insert(classCode)
      .returning('*'),

  findAll: () => 
    db('class_codes'),

  findByCode: code => 
    db('class_codes')
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
