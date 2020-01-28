const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById,
    addPolo,
    updatePoloById
}


function find() {
    return db('inventory-database')
    

}

function findById(id) {
    return db('inventory-database')
    .where({ id })
    .first();

}

function addPolo(polo) {
    return db('inventory-database')
      .insert(polo, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }
  

async function updatePoloById(id, polo) {
    try {
        const updatedPoloId = await db('inventory-database')
          .where({ id })
          .update(polo)
          .returning('id')
        const updatedPolo = await findById(updatedPoloId[0])
        return updatedPolo;
      } catch (error) {
        return {
          code: error.code,
          errno: error.errno,
          message: error.message
        };
      }
    }