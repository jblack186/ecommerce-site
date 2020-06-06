const express = require('express');
const helmet = require('helmet');
const mustacheExpress = require('mustache-express');
const InventoryRouter = require('../m-r inventory/inventory-router.js');
const DbInventoryRouter = require('../m-r inventory/database-inventory-router.js');
const UsersRouter = require('../m-r users/users-router.js');
const CartRouter = require('../m-r cart/cart-router.js');
const Register = require('../auth-routes/register.js');
const Login = require('../auth-routes/login.js');
const authRouter = require('../auth/authenticate-middleware.js');
const session = require('express-session'); //install express session
//for netlify
const serverless = require('serverless-http');

// const KnexSessionStore = require('connect-session-knex')(session); // to store sessions in database
const db = require('../database/dbConfig.js');
const User = require('../m-r users/users-model.js');
const Cart = require('../m-r cart/cart-model.js');
const cors = require('cors');
const bcrypt = require('bcryptjs');
// const passport = require('passport')
// const flash = require('express-flash')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')()
const CONNECTION_STRING = "postgres://localhost:5432/jamisonblackwell"
const dbOne = pgp(CONNECTION_STRING)
const server = express();
const dbEnv = process.env.DB_ENV || 'development';
const config = require("../knexfile.js");

console.log(dbOne)


const secrets = require('../config/secrets.js');

const router = express.Router();
//config for engine
server.engine('mustache', mustacheExpress());
server.set('views', './views')
server.set('view engine', 'mustache')

server.use(bodyParser.urlencoded({extednded: false}))

server.get('/registers', (req, res) => {
  res.render('registers')
})

server.post('/registers', (req, res) => {
  let username = req.body.username
  let password = req.body.password

  dbOne.oneOrNone('SELECT id FROM users WHERE username = $1', [username])
  .then((user) => {
    if(user) {
      res.render('register', {message: "Username already exist"})
    } else {
      dbOne.none('INSERT INTO users(username,password) VALUES($1, $2)', [username, password])
      .then(() => {
        res.send('SUCCESS')
      })
      .catch(err => {
        console.log(err)
      })
    }
  })
})



  server.use(cors());


// const Knex = require("knex");
// const knex = Knex(config[dbEnv]);
// const knex = Knex({
//   client: "pg",
//   connection: {
//   },
 
// })


//   const store = new KnexSessionStore({ // DONT FORGET new KEYWORD //how to store sessions
//     knex: knex,
//     tablename: "sessions",
//     sidfieldname: 'sid',
//     clearInterval: 600 * 600 * 1000,
//     createtable: true, 
// });



// server.use(session({
//   //session storage options
//   name: 'cocoabutter',
//   secret: 'cocoabutter',
//   saveUninitialized: false, // has implications with GDPR laws
//   resave: false, // save sessions even when they are not changed
//   cookie: {
//       maxAge: 10000 * 600 * 60 * 24,
//       secure: false, //in production set this to true cuz should only be sent if https // if false the cookie is sent over http, if true only sent over https
//       httpOnly: true, // if true JS cannot access the cookie
//       sameSite: false,
//   },
//   store: store
// }
// )); // add a req.session object


// server.use(passport.initialize())
// server.use(passport.session())

// server.use(flash())


// server.use(allowCrossDomain);
server.use(helmet());
server.use(express.json());

server.use('/api/register', Register);
server.use('/api/login', Login);
server.use('api/auth', authRouter);
server.use('/api/inventory', InventoryRouter);
server.use('/api/users', UsersRouter);
server.use('/api/cart', CartRouter);
server.use('/api/dbInventory', DbInventoryRouter);



// server.post('/register', (req, res) => {

//   let  user = req.body
//   const hash = bcrypt.hashSync(user.password, 10)
//   user.password=hash


//   if(!user.username || !user.password ) {
//     res.status(422).json({message: 'Please enter Username and Password to create an account'})
//   } else {
//     User.addUser(user)
//       .then(user => {
//         req.session.user = user
//         console.log(req.session)
//         res.status(201).json({
//           mess: user.username,
//           username: req.session.user.username,
//           session: user})
//         // const token = generateToken(newUser)
//       })
//       .catch(err => {
//         res.status(500)
//         .json({ err, message: "Sorry, but something went wrong while registering" })
//       })
//   }  authenticateToken, 
// })

router.get('/test', authRouter, (req, res) => {
  
  res.status(200).json('hi')
})
  255 
router.get('/cart', authenticateToken,  (req, res) => {
  Cart.findAll()
  .then(cart => {
    console.log('req', req.user.subject)
    const userCart = cart.filter(cart => cart.user_id === req.user.subject)
    console.log(userCart)
    res.status(200).json(userCart)
  })
  .catch(err => {
    console.log(err) 
  })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, secrets.jwtSecret, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}


router.get("/usr", function(req, res) {
  const firstname = 'jblack186'
  User.findBy({username: firstname})
  .then(user => {
    res.status(200).json(user)
  })

  // User.findAll()
  // .then(users => {
  //   res.status(200).json({users: users, user: req.session});
    
  // })
  // .catch(err => {
  //     console.log(err);
  //     res.send(err)
  // })
})

router.get('/', (req, res) => {
  res.json({
    'hello': 'hi'
  })
})

server.use('/.netlify/functions/api', router)
module.exports = server

module.exports.handler = serverless(server);
