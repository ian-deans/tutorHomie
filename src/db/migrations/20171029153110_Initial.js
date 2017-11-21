
exports.up = function(knex, Promise) {
  return knex.schema.createTable('class_codes', t => {
    t.string('code').primary()
    t.string('value')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('class_codes')
}
