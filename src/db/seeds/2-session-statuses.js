exports.seed = function(knex) {
  return knex('session_status').del()
    .then(function() {
      return knex('session_status').insert([
        {id: 1, text: 'PENDING' },
        {id: 2, text: 'SURVEY'},
        {id: 3, text: 'EXPENSIFY'},
        {id: 4, text: 'COMPLETE'},
        {id: 5, text: 'NO-SHOW'},
      ])
    })
}