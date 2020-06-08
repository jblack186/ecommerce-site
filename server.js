const express = require('express');
const helmet = require('helmet');
const mustacheExpress = require('mustache-express');
const InventoryRouter = require('./m-r inventory/inventory-router.js');
const DbInventoryRouter = require('./m-r inventory/database-inventory-router.js');
const UsersRouter = require('./m-r users/users-router.js');
const CartRouter = require('./m-r cart/cart-router.js');
const Register = require('./auth-routes/register.js');
const Login = require('./auth-routes/login.js');
const authRouter = require('./auth/authenticate-middleware.js');
const session = require('express-session'); //install express session

const db = require('./database/dbConfig.js');
const User = require('./m-r users/users-model.js');
const Cart = require('./m-r cart/cart-model.js');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')()
const CONNECTION_STRING = "postgres://localhost:5432/jamisonblackwell"
const dbOne = pgp(CONNECTION_STRING)
const server = express();
const dbEnv = process.env.DB_ENV || 'development';
const config = require("./knexfile.js");

console.log(dbOne)


const secrets = require('./config/secrets.js');

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


server.use(helmet());
server.use(express.json());

server.use('/api/register', Register);
server.use('/api/login', Login);
server.use('api/auth', authRouter);
server.use('/api/inventory', InventoryRouter);
server.use('/api/users', UsersRouter);
server.use('/api/cart', CartRouter);
server.use('/api/dbInventory', DbInventoryRouter);




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



module.exports = server


