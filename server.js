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

server.use(cors({
    method: ['POST', 'GET'],
    origin: ['http://localhost:3000', 'http://localhost:3000/register'],

  }));

const Knex = require("knex");
const knex = Knex({
  client: "pg",
  connection: {
    host: "shirt-store123.herokuapp.com",
    user: "blackwellj1040@gmail.com",
    password: "Baoirghnoare142!",
    database: process.env.DATABASE_URL
  },
  pool: {
    max: 50,
    min: 0,
    propagateCreateError: true 
  },
  acquireConnectionTimeout: 1000 

});

const store = new KnexSessionStore({
    knex: knex,
    tablename: "sessions" // optional. Defaults to 'sessions'
  });

  server.use(
    session({
      secret: "keyboard cat",
      cookie: {
        maxAge: 1000 * 60 * 60 // ten seconds, for testing
      },
      store: store
    })
  );
const sessionConfig = {
    //session storage options
    name: 'cocoabutter',
    secret: process.env.COOKIE_SECRET || 'dont bother me',
    cookie: {
        maxAge: 1000 * 600 * 10,
        store: store,
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



server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/register', Register);
server.use('/api/login', Login);
server.use('api/auth', authRouter);
server.use('/api/inventory', InventoryRouter);
server.use('/api/users', UsersRouter);
server.use('/api/cart', CartRouter);


server.use("/", function(req, res, next) {
    var n = req.session.views || 0;
    req.session.views = ++n;
    res.end(n + " views");
  });

server.get("/", authRouter, function(req, res) {
    return db('users')
    res.send("Hello")
    // res.cookie(sessionConfig)
})

module.exports = server;

