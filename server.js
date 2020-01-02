const express = require('express');
const helmet = require('helmet');
const InventoryRouter = require('./m-r inventory/inventory-router.js');
const UsersRouter = require('./m-r users/users-router.js');
const CartRouter = require('./m-r cart/cart-router.js');
const Register = require('./auth-routes/register.js');
const Login = require('./auth-routes/login.js');
const authRouter = require('./auth/authenticate-middleware.js');
const session = require('express-session'); //install express session
const KnexSessionStore = require('connect-session-knex')(session); // to store sessions in database
const db = require('./database/dbConfig.js');
const User = require('./m-r users/users-model.js');
const cors = require('cors');


const server = express();
const dbEnv = process.env.DB_ENV || 'production';









const Knex = require("knex");
const knex = Knex({
  client: "pg",
  connection: {
    host: '127.0.0.1',
    port: '5432',
    database: 'jamisonblackwell',
    user: "postgres",
    password: ""
    
  },
 
})


  const store = new KnexSessionStore({ // DONT FORGET new KEYWORD //how to store sessions
    knex: knex,
    tablename: "session"

});

server.use(session({
  //session storage options
  name: 'cocoabutter',
  secret: process.env.COOKIE_SECRET || 'dont bother me',
  saveUninitialized: true, // has implications with GDPR laws
  resave: false, // save sessions even when they are not changed
  cookie: {
      maxAge: 1000 * 600 * 10,
      secure: false, //in production set this to true cuz should only be sent if https // if false the cookie is sent over http, if true only sent over https
      httpOnly: false, // if true JS cannot access the cookie
      // rolling: true
  },
  store: store
}
)); // add a req.session object




// server.use(allowCrossDomain);
server.use(helmet());
server.use(express.json());

server.use('/api/register', Register);
server.use('/api/login', Login);
server.use('api/auth', authRouter);
server.use('/api/inventory', InventoryRouter);
server.use('/api/users', UsersRouter);
server.use('/api/cart', CartRouter);



server.get("/", authRouter, function(req, res) {
  User.findAll()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
      console.log(err);
      res.send(err)
  })
})

module.exports = server;

