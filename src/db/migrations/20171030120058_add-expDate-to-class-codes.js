
exports.up = function(knex, Promise) {
  return knex.schema.table('class_codes', t => {
    t.date('exp_date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('class_codes', t => {
    t.dropColumn('exp_date')
  })
};
