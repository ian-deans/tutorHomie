
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', t => {
    t.increments('id').primary()
    t.string('email').unique().notNullable()
    t.string('name').unique().notNullable()
    t.string('class_code').references('code').inTable('class_codes').notNullable()
    t.string('handle')
    t.date('grad_date')
    t.boolean('invited_to_slack')
    t.boolean('active')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
};
