require('dotenv').config();

// const express = require('express');

const server = require('./server.js');

// server.use(express.static('client'))
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*g");
  req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

