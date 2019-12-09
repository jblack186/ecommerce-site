
exports.seed = function(knex) {
  // Deletes ALL existing entries

      // Inserts seed entries
      return knex('users').insert([
        {username: 'jblack186', password: 'me'},
        {username: 'kano314', password: 'me'},
        {username: 'foreal424', password: 'me'},


      ]);
  
};
