const db = require('../database/dbConfig.js');

module.exports = {
    findAll,
    addPoloToCart,
    addCart,
    findById
};

function findAll() {
    return db('cart as c')
    // .join('users as u', 'u.id', 'c.user_id')
    // .join('flannel as f', 'f.cart_id', 'c.id')
    // .join('polos as p', 'p.cart_id', 'c.id')
    
   
}

function addPoloToCart(polo) {
    return db('cart')
    .insert(polo, 'id')
    .join('polos as p', 'cart as c')
    .select('*')
    .then(ids => {
        const [id] = ids;
        
    })
}

function addCart(cart) {
    return db('cart')
    .insert(cart)
    .join('users as u', 'u.id', 'c.user_id')
    .select('*')


}

function findById(id) {
    return db('cart')
      .where({ id })
      .first();
  }

