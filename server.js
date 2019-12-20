const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const InventoryRouter = require('./m-r inventory/inventory-router.js');
const UsersRouter = require('./m-r users/users-router.js');
const CartRouter = require('./m-r cart/cart-router.js');
const Register = require('./auth-routes/register.js')
const Login = require('./auth-routes/login.js')
const session = require('express-session'); //install express session



const server = express();
const dbEnv = process.env.DB_ENV || 'development';

// require('dotenv').config()
// console.log(process.env)

const sessionConfig = {
    //session storage options
    name: 'Cocoabutter',
    secret: 'dont bother me',
    saveUninitialized: true, // has implications with GDPR laws
    resave: false,

    //cookie options
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

