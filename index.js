require('dotenv').config();

// const express = require('express');

const server = require('./server.js');

 server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });

// server.use(express.static('client'))

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

