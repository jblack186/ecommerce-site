const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../config/token')
const Users = require('../m-r users/users-model.js')


router.post('/', (req, res) => {
  let  user = req.body

  const hash = bcrypt.hashSync(user.password, 10)
  user.password=hash

  if(!user.username || !user.password ) {
    res.status(422).json({message: 'Please enter Username and Password to create an account'})
  } else {
    Users.addUser(user)
      .then(newUser => {
        // const token = generateToken(newUser)
        // req.session.user = newUser

        res.status(200).json({  
          message: `Welcome ${newUser.firstname}. You have been successfully registered!`,
          id: newUser.id,
          // token: token
        })
      })
      .catch(err => {
        res.status(500)
        .json({ err, message: "Sorry, but something went wrong while registering" })
      })
  }
})


module.exports = router