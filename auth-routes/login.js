const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../config/token.js');
const Users = require('../m-r users/users-model.js');
const auth = require('../auth/authenticate-middleware.js');
const cors = require('cors');


router.use(cors({
  origin: "http://localhost:3000/login",
  'Access-Control-Allow-Origin': "http://localhost:3000/login",
    credentials: true,
    withCredentials: true,
    

  }));

router.use(function(req, res, next) {
  req.header("Access-Control-Allow-Origin", "http://localhost:3000/login");
  req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


router.post('/', (req, res) => {
  let {username, password} = req.body

  if(!req.body.username || !req.body.password) {
    res.status(422).json({message: 'Please provide a username and a password to log in'})
  } else {
    Users.findBy({username}).first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        // const token = generateToken(user)
        // res.setHeader("Set-Cookie", req.session)
      
        res.status(200).json({
          message: user.username,
          id: user.id,
          session: user
          

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