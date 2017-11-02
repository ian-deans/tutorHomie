
exports.up = function(knex, Promise) {
  return knex.schema.createTable('session_status', t => {
    t.integer('id').primary()
    t.string('text')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('session_status')
}
