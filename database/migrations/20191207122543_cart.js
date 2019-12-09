
exports.up = function(knex) {
    return knex.schema
    .createTable('cart', tbl => {
        tbl.increments()
        tbl.integer('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        

  })


};
    
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('cart')
  };