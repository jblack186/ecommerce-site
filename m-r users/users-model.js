const db = require('../database/dbConfig.js');

module.exports = {
    findAll,
    addUser,
    findBy,
    findById
};

function findAll() {
    return db('users as u')
    // .join('cart as c', 'c.user_id', 'u.id')
    // .select('*')

}

function findBy(filter) {
    return db('users')
    .where({filter})
    .first()
 
}

function addUser(user) {
    const u = user
  return db('users')
    .insert(user)
    .then(user => {
        return user
    })
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }

