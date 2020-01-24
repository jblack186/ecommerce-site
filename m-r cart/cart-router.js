const router = require('express').Router();
const Cart = require('./cart-model.js');

router.get('/', (req, res) => {
    Cart.findAll()
    .then(cart => {
      res.status(200).json(cart);
    })
    .catch(err => {
        console.log(err);
        res.send(err)
    })
  })

  router.post('/', (req, res) => {
    const newCart = req.body;
  Cart.addCart(newCart)
    .then(cart => {
      res.status(201).json(cart);
    })
    .catch(err => {
        console.log(err);
        res.send(err)
    })
  })

  router.get('/userCart/:id', (req, res) => {
    const {id} = req.params
    Cart.findById(id)
    .then(cart => {
      res.status(200).json(cart)
    })
    .catch(err => {
      console.log(err)
    })
  })

  module.exports = router;