
exports.up = function(knex) {
  return knex.schema.createTable('session_status', t => {
    t.integer('id').unsigned().primary()
    t.string('text')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('session_status')
}
