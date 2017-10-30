let config = require('./knexfile.js')
// FIXME: Remove hardcoding of development configuration
// config = process.env.NODE_ENV ? config[process.env.NODE_ENV] : config['development']
const db = require('knex')(config.development)

export default db
