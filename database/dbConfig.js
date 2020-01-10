const knex = require('knex');


const config = require('../knexfile.js');

const environment = process.env.ENVIRONMENT || 'production'; // if something else isn't setting ENV, use development

module.exports = knex(config[environment]);

