const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const InventoryRouter = require('./m-r inventory/inventory-router.js');
const UsersRouter = require('./m-r users/users-router.js');
const CartRouter = require('./m-r cart/cart-router.js');
const Register = require('./auth-routes/register.js')
const Login = require('./auth-routes/login.js')



const server = express();
const dbEnv = process.env.DB_ENV || 'development';
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/register', Register);
server.use('/api/login', Login);

server.use('/api/inventory', InventoryRouter);
server.use('/api/users', UsersRouter);
server.use('/api/cart', CartRouter);


server.get("/", function(req, res) {
    res.send("Hello")
})

module.exports = server;

