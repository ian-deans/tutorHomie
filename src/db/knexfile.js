require('dotenv').config()
const path = require('path')
require('babel-register')

module.exports = {

  development: {
    client: 'pg',
    version: '7.4',
    connection: {
      host: process.env.PSQL_HOST,
      user: process.env.PSQL_USER,
      password: process.env.PSQL_PASS,
      database: 'dev.tutor_homie'
    }
  },

  test: {
    client: 'pg',
    version: '7.4',
    connection: {
      host: '127.0.0.1',
      user: process.env.PSQL_USER,
      password: process.env.PSQL_PASS,
      database: 'test.tutor_homie'
    }
  },

  production: {
    client: 'pg',
    version: '7.4',
    connection: {
      host: '127.0.0.1',
      user: process.env.PSQL_USER,
      password: process.env.PSQL_PASS,
      database: 'tutor_homie'
    }
  }
}
