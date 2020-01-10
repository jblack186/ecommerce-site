const localPg = {
  host: 'ec2-54-243-241-62.compute-1.amazonaws.com',
  port: 5432, // You may need/want to change this
  database: 'd2vhhe21pl74f3',
  user: 'izkbkalkiehxvz', // User and pass may be different for you
  password: 'bc14ad9345b95898a896d289fc662044efe2db40d37cb9d054a7a84f31a15a60',  
  ssl: true
}

const prodDbConnection = process.env.DATABASE_URL


module.exports = {
    // development: {
    //   client: 'sqlite3',
    //   connection: {
    //     filename: './database/inventory.db3',
    //   },
    //   useNullAsDefault: true,
    //   migrations: {
    //     directory: './database/migrations',
    //   },
    //   seeds: {
    //     directory: './database/seeds',
    //   },
    // },
    // testing: {
    //   client: 'sqlite3',
    //   connection: {
    //     filename: './database/test.db3',
    //   },
    //   useNullAsDefault: true,
    //   migrations: {
    //     directory: './database/migrations',
    //   },
    //   seeds: {
    //     directory: './database/seeds',
    //   },
    // },
     

    development: {
      client: 'pg',
      connection: localPg,  
      useNullAsDefault: true,
           migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      },
    },


  
    production: {
      client: 'pg',
      connection: prodDbConnection,
      useNullAsDefault: true,
           migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      },
    },


};






  
