const router = require('express').Router();
const Inventory = require('./inventory-model.js');

// router.get('/', (req, res) => {
//     Inventory.find()
//     .then(polos => {
//       res.status(200).json(polos);
//     })
//     .catch(err => {
//         console.log(err);
//         res.send(err)
//     })
//   })

  module.exports = router;