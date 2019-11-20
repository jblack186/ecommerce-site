const router = require('express').Router();
const Inventory = require('./inventory-model.js');

router.get('/', (req, res) => {
    Inventory.find()
    .then(inventory => {
      res.status(200).json(inventory);
    })
    .catch(err => {
        console.log(err);
        res.send(err)
    })
  })

  module.exports = router;