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
const bcrypt = require('bcryptjs');


const server = express();
const dbEnv = process.env.DB_ENV || 'production';





server.use(cors({
  origin: "http://localhost:3000",
  'Access-Control-Allow-Origin': "http://localhost:3000",
    credentials: true,
    withCredentials: true,
    

  }));

  server.use(function(req, res, next) {
    req.header("Access-Control-Allow-Origin", "http://localhost:3000");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });


const Knex = require("knex");
const knex = Knex({

  client: "pg",
  connection: {
    host: 'ec2-54-243-241-62.compute-1.amazonaws.com',
    database: 'd2vhhe21pl74f3',
    user: "izkbkalkiehxvz",
    password: "bc14ad9345b95898a896d289fc662044efe2db40d37cb9d054a7a84f31a15a60",
    port: '5432',
    ssl: true
    
  },
 
})


  const store = new KnexSessionStore({ // DONT FORGET new KEYWORD //how to store sessions
    knex: knex,
    tablename: "sessions",
    createtable: true,

});




server.use(session({
  //session storage options
  // name: 'cocoabutter',
  secret: 'cocoabutter',
  saveUninitialized: false, // has implications with GDPR laws
  resave: false, // save sessions even when they are not changed
  cookie: {
      maxAge: 1000 * 600 * 10,
      secure: false, //in production set this to true cuz should only be sent if https // if false the cookie is sent over http, if true only sent over https
      httpOnly: true, // if true JS cannot access the cookie
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

var count = 0;

// server.use("/", function(req, res, next) {
//   var n = req.session.views || 0;
//   req.session.views = ++n;
//   res.end(n + " views");
// });

server.post('/register', (req, res) => {
  let  user = req.body
  const hash = bcrypt.hashSync(user.password, 10)
  user.password=hash
  if(!user.username || !user.password ) {
    res.status(422).json({message: 'Please enter Username and Password to create an account'})
  } else {
    User.addUser(user)
      .then(user => {
        req.session.user = user
        console.log(req.session)
        res.status(201).json({user})
        // const token = generateToken(newUser)
      })
      .catch(err => {
        res.status(500)
        .json({ err, message: "Sorry, but something went wrong while registering" })
      })
  }
})

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

