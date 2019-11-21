const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const InventoryRouter = require('./inventory/inventory-router.js');

const server = express();
const dbEnv = process.env.DB_ENV || 'development';
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/inventory', InventoryRouter);



module.exports = server;

