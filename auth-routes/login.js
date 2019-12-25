const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../config/token.js');
const Users = require('../m-r users/users-model.js');
const auth = require('../auth/authenticate-middleware.js');

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
        // res.setHeader("Set-Cookie", user.id)
        res.status(200).json({
          message: user.username,
          id: user.id,
          session: req.session
          

          // token: token
        })
        

      } else {
        res.status(401).json({message: 'Invalid credential'})
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