let config = require('./knexfile.js')
config = process.env.NODE_ENV ? config[process.env.NODE_ENV] : config['development']

const db = require('knex')(config)

export default db
