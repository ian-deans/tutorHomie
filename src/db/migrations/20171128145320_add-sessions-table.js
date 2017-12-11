exports.up = function(knex) {
  return knex.schema.createTable('sessions', t => {
    t.increments('id').primary()
    t.dateTime('datetime').notNullable()
    t.string('student').references('name').inTable('students').notNullable()
    t.string('topic')
    t.integer('status').references('id').inTable('session_status')
    t.boolean('in_central')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sessions')
}
