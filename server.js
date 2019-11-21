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

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

module.exports = server;

