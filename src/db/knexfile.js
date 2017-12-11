const path = require('path')
require('babel-register')

module.exports = {

  development: {
    client: 'pg',
    version: '7.4',
    connection: {
      host: '127.0.0.1',
      user: 'idean',
      database: 'dev.tutor_homie'
    }
  },

  test: {
    client: 'pg',
    version: '7.4',
    connection: {
      host: '127.0.0.1',
      user: 'idean',
      database: 'test.tutor_homie'
    }
  },

  production: {
    client: 'pg',
    version: '7.4',
    connection: {
      host: '127.0.0.1',
      user: 'idean',
      database: 'tutor_homie'
    }
  }
}
