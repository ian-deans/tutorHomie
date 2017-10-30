module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './databases/dev.tutor_homie.db'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './databases/tutor_homie.db'
    }
  }

};
