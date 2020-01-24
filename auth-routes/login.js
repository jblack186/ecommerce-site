const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../config/token.js');
const Users = require('../m-r users/users-model.js');
const auth = require('../auth/authenticate-middleware.js');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');
const Cart = require('../m-r cart/cart-model.js');


// router.use(cors({
//   origin: "http://localhost:3000",
//   'Access-Control-Allow-Origin': "http://localhost:3000",
//     credentials: true,
//     withCredentials: true,
    

//   }));

// router.use(function(req, res, next) {
//   req.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// && bcrypt.compareSync(password, user.password)

// const refreshTokens = []

// router.post('/token',(req, res) => {
//   const refreshToken = req.body.token
//   if (refreshToken == null) return res.sendStatus(401)
//   if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//   jwt.verify(refreshToken, secrets.jwtSecret, (err, user) => {
//     if (err) return res.sendStatus(403)
//     const accessToken = generateToken({ name : user.name })
//     res.json({ accessToken: accessToken})
//   })
// })

router.post('/', (req, res) => {
  let {username, password} = req.body
  const user = {name: username}
  const accessToken = jwt.sign(user, secrets.jwtSecret)
  res.json({ accessToken: accessToken })
// Cart.addCart()
  // if(!req.body.username || !req.body.password) {
  //   res.status(422).json({message: 'Please provide a username and a password to log in'})
  // } else {
    // Users.findBy({username}).first()
    // .then(user => {
    //   if(user) {
    //     // const token = generateToken(user)
    //     // Remove password from the user object to be passed back in response

    //     const username = req.body.username
    //     const user = { name: username}

    //     const accessToken = generateToken(user)
    //     const refreshToken = jwt.sign(user, secrets.jwtSecret)
    //     // refreshTokens.push(refreshToken)
    //     res.json({accessToken: accessToken, refreshToken: refreshToken})

    //     // res.status(200).json({
    //     //   message: `Welcome ${user.username}!`,
    //     //   id: user.id,
    //     //   token: token
    //     // })

    //   } else {
    //     res.status(401).json({message: 'Invalid credentials'})
    //   }
    // })

    
    // .catch(err => {
    //   console.log(err)
    //   res.status(500) 
    //   .json({ message: "Sorry, but something went wrong while logging in" });
    // }
  })





module.exports = router