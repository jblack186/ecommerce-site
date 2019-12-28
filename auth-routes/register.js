const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../config/token')
const Users = require('../m-r users/users-model.js');
const cors = require('cors');

//test

const corsOptions = {
origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.post('/', cors(corsOptions), (req, res) => {
  let  user = req.body

  const hash = bcrypt.hashSync(user.password, 10)
  user.password=hash

  if(!user.username || !user.password ) {
    res.status(422).json({message: 'Please enter Username and Password to create an account'})
  } else {
    Users.addUser(user)
      .then(newUser => {
        
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        // const token = generateToken(newUser)
        req.session.user = newUser
        // set.session = newUser.username
        res.status(201).json({newUser})
      })
      .catch(err => {
        res.status(500)
        .json({ err, message: "Sorry, but something went wrong while registering" })
      })
  }
})


module.exports = router