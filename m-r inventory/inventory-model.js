const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById,
    addPolo
}

function find() {
    return db('polos')
    

}

function findById(id) {
    return db('polos')
    .where({ id })
    .first();

}

function addPolo(polo) {
    return db('polos')
      .insert(polo, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }
  

