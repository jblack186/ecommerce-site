const knex = require('knex');


const config = require('../knexfile.js');

const environment = process.env.DB_ENV || 'development'; // if something else isn't setting ENV, use development

module.exports = knex(config[environment]);

