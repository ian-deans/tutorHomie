let config = require('./knexfile.js')
config = process.env.NODE_ENV ? config[process.env.NODE_ENV] : config['development']

export default require('knex')(config)
