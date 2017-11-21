import db from '../db'

const _db = db('class_codes')
export default class ClassCodes {    

  static async add(classCode) {
    if (!classCode.code || !classCode.value) {
      throw _invalidSyntaxError()
    }
    try {
      await _db.insert(classCode)
    } catch(error) {
      throw new Error(`Error occurred while attempting to add new class code to database: ${error}`)
    }
  }

  static async findAll() {
    let codes;
    try {
      codes = await _db.select('*').orderBy('code', 'asc')
    } catch(error) {
      throw new Error(`Error occurred while attempting to find all class codes: ${error}`)
    }
    return codes
  }

  static async findByCode(targetCode) {
    if (!targetCode) {
      throw _invalidSyntaxError()
    }
    
    let code;
    try {
      code = await _db.select('*').where({code: targetCode})
    } catch(error) {
      throw new Error(`Error occurred while searching for code ${code}: ${error}`)
    }
    return code
  }

  // static async findByTimezone() {}

  // static async findActive() {}

  // static async findInactive() {}

  static async update(targetCode, newVals) {
    if (!targetCode || !newVals) {
      throw _invalidSyntaxError()
    }

    if (typeof newVals === 'string') {
      try {
        newVals = JSON.parse(newVals)
      } catch(error) {
        throw new Error('Must provide new values in JSON format.')
      }
    }

    try {
      await _db.where({code: targetCode}).update({...newVals})
    } catch(error) {
      throw new Error(`Could not update database entry for class_code ${targetCode}:\n  ${error}`)
    }
  }

  static async delete(code) {
    if (!code) { 
      throw _invalidSyntaxError() 
    }

    try {
      await _db.where({code}).del()
    } catch(error) {
      throw new Error(`Encountered error while attempting to delete code ${code}:\n ${error}`)
    }
  }

}

const _invalidSyntaxError = () => new Error('Invalid Syntax.')