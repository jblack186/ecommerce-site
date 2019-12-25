const db = require('../database/dbConfig.js');

module.exports = {
    findAll,
    addUser,
    findBy
};

function findAll() {
    return db('users as u')
    // .join('cart as c', 'c.user_id', 'u.id')
    // .select('*')

}

function findBy(filter) {
    return db('users').where(filter)
 
}

function addUser(user) {
    const u = user
  return db('users')
    .insert(user)
    .then(user => {
        return u
    })
}

