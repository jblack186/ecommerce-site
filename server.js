const express = require('express');
const helmet = require('helmet');
const InventoryRouter = require('./m-r inventory/inventory-router.js');
const UsersRouter = require('./m-r users/users-router.js');
const CartRouter = require('./m-r cart/cart-router.js');
const Register = require('./auth-routes/register.js');
const Login = require('./auth-routes/login.js');
const authRouter = require('./auth/authenticate-middleware.js');
const sessions = require('express-session'); //install express session
const KnexSessionStore = require('connect-session-knex')(sessions); // to store sessions in database
const db = require('./database/dbConfig.js');
const User = require('./m-r users/users-model.js');
const cors = require('cors');


// const knex = require('./database/dbConfig.js');
const server = express();
const dbEnv = process.env.DB_ENV || 'development';


// require('dotenv').config()
// console.log(process.env)





server.use(cors({
  origin: "*",
    credentials: true,
    withCredentials: true,


  }));





const Knex = require("knex");
const knex = Knex({
  client: "pg",
  connection: {
    host: '127.0.0.1',
    port: '5432',
    database: 'postgres',
    user: "postgres",
    password: ""
    
  },
  pool: {
         min: 3,
         max: 7,
       },
       acquireConnectionTimeout: 5000
     
})
//   "pool": {
//     "min": 2,
//     "max": 6,
//     "createTimeoutMillis": 3000,
//     "acquireTimeoutMillis": 30000,
//     "idleTimeoutMillis": 30000,
//     "reapIntervalMillis": 1000,
//     "createRetryIntervalMillis": 100,
//     "propagateCreateError": false // <- default is true, set to false
//   },  

// });

// const store = new KnexSessionStore({
//   knex: require('./database/dbConfig.js'),
//     tablename: "sessions" // optional. Defaults to 'sessions'
//   });

  // server.use(
  //   session({
  //     secret: "keyboard cat",
  //     cookie: {
  //       maxAge: 1000 * 60 * 60, // ten seconds, for testing
  //     },
  //     store: store
  //   })
  // );
const sessionConfig = {
    //session storage options
    name: 'cocoabutter',
    secret: process.env.COOKIE_SECRET || 'dont bother me',
    saveUninitialized: true, // has implications with GDPR laws
    resave: false, // save sessions even when they are not changed
    cookie: {
        maxAge: 1000 * 600 * 10,
        sameSite: 'false',
        secure: false, //in production set this to true cuz should only be sent if https // if false the cookie is sent over http, if true only sent over https
        httpOnly: false // if true JS cannot access the cookie
    },
    store: new KnexSessionStore({ // DONT FORGET new KEYWORD //how to store sessions
      knex: knex,
      tablename: "session"
  
}),
    
}


// server.use(allowCrossDomain);
server.use(helmet());
server.use(express.json());
server.use(sessions(sessionConfig)); // add a req.session object

server.use('/api/register', Register);
server.use('/api/login', Login);
server.use('api/auth', authRouter);
server.use('/api/inventory', InventoryRouter);
server.use('/api/users', UsersRouter);
server.use('/api/cart', CartRouter);




server.get("/", authRouter, function(req, res) {
  User.findAll()
  .then(users => {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");   
    // req.header("Access-Control-Allow-Origin", "http://localhost:3000");   
    res.status(200).json(users);
  })
  .catch(err => {
      console.log(err);
      res.send(err)
  })
})

module.exports = server;

