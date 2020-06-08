const Pool = require('pg').Pool
const pool = new Pool({
    user: 'jblack',
    host: 'localhost';
    database: 'api',
    password: 'maddog90',
    port: 5432
})