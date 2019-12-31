const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../config/token')
const Users = require('../m-r users/users-model.js');
const cors = require('cors');

// const auth = cors({
//   origin: "*",
//     credentials: true,
//     withCredentials: true,
// });

// router.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

const auth = router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

router.post('/',auth, (req, res) => {
  let  user = req.body
  const hash = bcrypt.hashSync(user.password, 10)
  user.password=hash

  if(!user.username || !user.password ) {
    res.status(422).json({message: 'Please enter Username and Password to create an account'})
  } else {
    Users.addUser(user)
   
      .then(user => {
        req.header("Access-Control-Allow-Origin", "http://localhost:3000");

        // req.session.user = user
        // const token = generateToken(newUser)

        // set.session = newUser.username

        res.status(201).json({user})

      })
      .catch(err => {
        res.status(500)
        .json({ err, message: "Sorry, but something went wrong while registering" })
      })
  }
})


module.exports = router