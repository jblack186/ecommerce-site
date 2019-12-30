const express = require('express');
const cors = require('cors');
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


// const knex = require('./database/dbConfig.js');
const server = express();
const dbEnv = process.env.DB_ENV || 'development';

// require('dotenv').config()
// console.log(process.env)

//CORS middleware
// const allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   req.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   req.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   req.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// }

server.use(cors({
  origin: "http://localhost:3000",
    credentials: true,
    withCredentials: true,


  }));


//   server.use((req , res , next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   //   res.header("Access-Control-Allow-Credentials", true);
//   // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header("Access-Control-Allow-Headers", 'Content-Types, Authorization, Application/JSON');
//   if(req.method === 'OPTIONS'){
//     res.header('Access-Control-Allow-Methods', 'PUT, POST,PATCH,DELETE, GET');
//     return res.status(200).json({});
//   }
//   next();
// });



// server.use(function(req, res, next) {
//   req.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// })

  // server.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

const Knex = require("knex");
const knex = Knex({
  client: "pg",
  connection: {
    host: 'localhost',
    database: 'shirt-store123',
    user: "postgres",
    password: process.env.POSTGRES_PASS,
    
  },
  "pool": {
    "min": 2,
    "max": 6,
    "createTimeoutMillis": 3000,
    "acquireTimeoutMillis": 30000,
    "idleTimeoutMillis": 30000,
    "reapIntervalMillis": 1000,
    "createRetryIntervalMillis": 100,
    "propagateCreateError": false // <- default is true, set to false
  },  

});

const store = new KnexSessionStore({
  knex: require('./database/dbConfig.js'),
    tablename: "sessions" // optional. Defaults to 'sessions'
  });

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
    cookie: {
        maxAge: 1000 * 600 * 10,
        store: store,
        SameSite: false,
        secure: process.env.NODE_ENV == 'development' ? false : true, //in production set this to true cuz should only be sent if https // if false the cookie is sent over http, if true only sent over https
        httpOnly: true // if true JS cannot access the cookie
    },
    saveUninitialized: true, // has implications with GDPR laws
    resave: false, // save sessions even when they are not changed
    store: new KnexSessionStore({ // DONT FORGET new KEYWORD //how to store sessions
    //cookie options
    // knex: knex, // imported from dbCOnfig.js
    tablename: 'sessions',
    sidfieldname: "sid",
    createTable: true,
    clearInterval: 1000 * 60 * 10 //defaults to 6000 milliseconds
}),
    
}


// server.use(allowCrossDomain);
server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/register', Register);
server.use('/api/login', Login);
server.use('api/auth', authRouter);
server.use('/api/inventory', InventoryRouter);
server.use('/api/users', UsersRouter);
server.use('/api/cart', CartRouter);




server.get("/",  function(req, res) {
  User.findAll()
  .then(users => {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");   
    // req.header("Access-Control-Allow-Origin", "http://localhost:3000");   
    res.status(200).json(users);
    console.log(res)
  })
  .catch(err => {
      console.log(err);
      res.send(err)
  })
})

module.exports = server;

