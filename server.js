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
const cookieParser = require('cookie-parser');


const server = express();
const dbEnv = process.env.DB_ENV || 'production';





server.use(cors({
  origin: "http://localhost:3000",
    credentials: true,
    withCredentials: true,
    

  }));



const Knex = require("knex");
const knex = Knex({

  client: "pg",
  connection: {
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    port: process.env.port,
    ssl: true
    
  },
 
})


  const store = new KnexSessionStore({ // DONT FORGET new KEYWORD //how to store sessions
    knex: knex,
    tablename: "sessions",
    clearInterval: 10000 * 60 * 60
});




server.use(session({
  //session storage options
  name: 'cocoabutter',
  secret: 'cocoabutter',
  saveUninitialized: true, // has implications with GDPR laws
  resave: false, // save sessions even when they are not changed
  cookie: {
      maxAge: 10000 * 600 * 60 * 24,
      secure: true, //in production set this to true cuz should only be sent if https // if false the cookie is sent over http, if true only sent over https
      httpOnly: true, // if true JS cannot access the cookie
      sameSite: true
      },
  store: store
}
)); // add a req.session object




// server.use(allowCrossDomain);
server.use(helmet());
server.use(express.json());
server.use(cookieParser())
server.use('/api/register', Register);
server.use('/api/login', Login);
server.use('api/auth', authRouter);
server.use('/api/inventory', InventoryRouter);
server.use('/api/users', UsersRouter);
server.use('/api/cart', CartRouter);


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
        res.status(201).json({
          message: user.username,
          username: req.session.user.username,
          session: user})
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
  res.cookies.connect.sid
  .then(users => {
    res.status(200).json({users: users, user: req.session});
    
  })
  .catch(err => {
      console.log(err);
      res.send(err)
  })
})



module.exports = server;

