
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sessions', t => {
    t.increments('id').primary()
    t.dateTime('datetime')
    t.string('student').references('name').inTable('students')
    t.string('status').references('id').inTable('session_status')
    t.boolean('in_central')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sessions')
}
