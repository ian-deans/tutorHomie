const path = require('path')

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname + '/databases/dev.tutor_homie.db') 
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname + '/databases/test.tutor_homie.db')
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname + '/databases/tutor_homie.db') 
    }
  }

};
