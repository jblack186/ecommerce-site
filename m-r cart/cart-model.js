const db = require('../database/dbConfig.js');

module.exports = {
    findAll,
    addPoloToCart,
    addCart
};

function findAll() {
    return db('cart as c')
    

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