const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const InventoryRouter = require('./m-r inventory/inventory-router.js');
const UsersRouter = require('./m-r users/users-router.js');
const CartRouter = require('./m-r cart/cart-router.js');
const Register = require('./auth-routes/register.js')
const Login = require('./auth-routes/login.js')
const session = require('express-session'); //install express session
const KnexSessionStore = require('connect-session-knex')(session); // to store sessions in database



const knex = require('./database/dbConfig.js');
const server = express();
const dbEnv = process.env.DB_ENV || 'development';

// require('dotenv').config()
// console.log(process.env)

const sessionConfig = {
    //session storage options
    name: 'cocoabutter',
    secret: 'dont bother me',
    saveUninitialized: true, // has implications with GDPR laws
    resave: false,
    store: new KnexSessionStore({ // DONT FORGET new KEYWORD //how to store sessions
    //cookie options
    knex, // imported from dbCOnfig.js
    tablename: 'sessions',
    sidfieldname: "sid",
    createTable: true,
    clearInterval: 1000 * 60 * 10 //defaults to 6000 milliseconds
}),
    cookie: {
        maxAge: 1000 * 600 * 10,
        secure: false, //in production set this to true cuz should only be sent if https // if false the cookie is sent over http, if true only sent over https
        httpsOnly: true // if true JS cannot access the cookie
    }
}

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session({
    secret: 'secret-key',
    resave: false,
}));

server.use('/api/register', Register);
server.use('/api/login', Login);

server.use('/api/inventory', InventoryRouter);
server.use('/api/users', UsersRouter);
server.use('/api/cart', CartRouter);


server.get("/", function(req, res) {
    res.send("Hello")
})

module.exports = server;

