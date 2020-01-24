const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../config/token')
const Users = require('../m-r users/users-model.js');
const Cart = require('../m-r cart/cart-model.js');


router.post('/', (req, res) => {
  let  user = req.body
  const hash = bcrypt.hashSync(user.password, 10)
  user.password=hash
  if(!user.username || !user.password ) {
    res.status(422).json({message: 'Please enter Username and Password to create an account'})
  } else {
    Users.addUser(user)
      .then(newUser => {
        Cart.addCart({user_id: newUser.id})
      .then(cart => {
        console.log(cart)
        console.log(newUser.id)
      })
        const token = generateToken(newUser)
        res.header('Authorization', 'Bearer '+ token);
        res.status(201).json({  
            message: `Welcome ${newUser.username}. You have been successfully registered!`,
            token: token,
            
          })
      })
      .catch(err => {
        res.status(500)
        .json({ err, message: "Sorry, but something went wrong while registering" })
      })
      
  }
})


module.exports = router