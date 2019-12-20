const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../config/token')
const Users = require('../m-r users/users-model')


router.post('/', (req, res) => {
  let {username, password} = req.body

  if(!req.body.username || !req.body.password) {
    res.status(422).json({message: 'Please provide a username and a password to log in'})
  } else {
    Users.findBy({username}).first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        // const token = generateToken(user)
        req.session.user = user
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          id: user.id, 
          password: user.password
          // token: token
        })

      } else {
        res.status(401).json({message: 'Invalid credentials'})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500) 
      .json({ message: "Sorry, but something went wrong while logging in" });
    })
  }
})



module.exports = router