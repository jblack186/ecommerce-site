
exports.up = function(knex) {
  return knex.schema
  .createTable('polos', tbl => {
      tbl.increments();
      tbl.string('item_name', 256)
      .notNullable()
      tbl.string('description', 256)
      tbl.integer('price')
      tbl.string('img', 255)
      tbl.string('sku', 256)
      

  })

//   .createTable('users', tbl => {
//     tbl.increments();
//     tbl.string('username', 256)
//       .notNullable()
//     tbl.string('password', 256)
//       .notNullable()
//   })
// };

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('polos')

};
