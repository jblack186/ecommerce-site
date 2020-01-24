const db = require('../database/dbConfig.js');

module.exports = {
    findAll,
    addUser,
    findBy,
    findById
};

function findAll() {
    return db('users as u')
    .join('cart as c', 'c.user_id', 'u.id')
    .select('*')

}

function findBy(filter) {
    return db('users').where(filter);
 
}

async function addUser(user) {
    try {
      const responseIds = await db('users').insert(user).returning('id')
      const userId = responseIds[0]
  
      const newUserData =  await findById(userId)
      return newUserData
    } catch(error) {
      return error
    }
    
  }
  
  
function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }

