exports.up = function(knex) {
  return knex.schema
  .createTable('polos', tbl => {
      tbl.increments();
      tbl.string('item_name', 256)
      .notNullable()
      tbl.string('description', 256)
      tbl.integer('price')
      tbl.integer('quantity')
      tbl.string('img', 455)
      tbl.string('sku', 256)
      tbl.string('testOne', 256)
      tbl.string('type', 256)
      tbl.integer('cart_id')
        .notNullable()
        .references('id')
        .inTable('cart')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('product_id')

      

  })


};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('polos')

};



