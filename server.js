const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const Inventory = require('./inventory/inventory-model.js');



const InventoryRouter = require('./inventory/inventory-router.js');

const server = express();
const dbEnv = process.env.DB_ENV || 'development';
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/inventory', InventoryRouter);

server.get("/", function(req, res) {
    res.send("Hello")
})


server.get('/', (req, res) => {
    Inventory.find()
    .then(polos => {
      res.status(200).json(polos);
    })
    .catch(err => {
        console.log(err);
        res.send(err)
    })
  })

module.exports = server;

