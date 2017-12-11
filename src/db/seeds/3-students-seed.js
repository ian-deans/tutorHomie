import seeder from 'knex-csv-seeder'

exports.seed = seeder({
  table: 'students',
  file: './seeds/students.csv'
})
