exports.seed = function(knex) {
        
  // Inserts seed entries
  return knex('users').insert([
    {username: 'jblack186', password: 'me'},
    {username: 'jblack186', password: 'me'},
    {username: 'jblack186', password: 'me'},
    {username: 'jblack186', password: 'me'},

  ]);
};