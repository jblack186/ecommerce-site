const router = require('express').Router();
const Inventory = require('./database-inventory-model.js');

router.get('/', (req, res) => {
    Inventory.find()
    .then(polos => {
      res.status(200).json(polos);
    })
    .catch(err => {
        console.log(err);
        res.send(err)
    })
  })



  router.post('/', (req, res) => {
    const polo = req.body
    Inventory.addPolo(polo)
    .then(polo => {
      res.status(201).json(polo)
    })
    .catch(err => {
      console.log(err)
    })
  })

  router.put('/:id', (req, res) => {
    const polo = req.body
    const {id} = req.params
    Inventory.updatePoloById(id, polo)
      .then(polo => {
        res.status(202).json(polo)
      })
      .catch(err => {
        console.log(err)
      })
  })

  

  module.exports = router;