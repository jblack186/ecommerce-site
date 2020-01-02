const secrets = require('../config/secrets.js');
const Users = require('../m-r users/users-model.js');
// const jwt = require('jsonwebtoken');

// && req.session.user
module.exports = (req, res, next) => {
   console.log('sess', req.session)
   if (req.session) {

      next();
   } else {
      res.status(401).json({message: 'Invalid Credentials'});
   }
} //go to using sessions and cookies web24 luiz  1:11:00






//    const token = req.headers.authorization;
  

// if (token) {
//    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
//       if(err) {
//          console.log(err);
//          //token is invalid
//          res.status(401).json({ you: 'shall not pass'})
//       } else {
//          req.user = { username: decodedToken.username};
//        next();
//       }
//    })
// } else {
//    res.status(400).json({
//       message: "no token provided"
//    })
// }


