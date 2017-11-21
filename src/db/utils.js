import db from './db'

const utils = {
  clearTable: tableName => db(tableName).select().del()
}

export default utils
