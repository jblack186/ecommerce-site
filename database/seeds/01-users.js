exports.seed = function(knex) {
        
  // Inserts seed entries
  return knex('users').insert([
    {username: 'jblack186', password: 'me'},
    {username: 'kano', password: 'me'},
    {username: 'bray', password: 'me'},

  ]);
};