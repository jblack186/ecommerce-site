module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './database/inventory.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      },
    },
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './database/test.db3',
      },
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
      connection: {
        host: 'ec2-54-243-241-62.compute-1.amazonaws.com',
        database: 'd2vhhe21pl74f3',
        user: "izkbkalkiehxvz",
        password: "bc14ad9345b95898a896d289fc662044efe2db40d37cb9d054a7a84f31a15a60",
        port: '5432',
        ssl: true
        
      },
           migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      },
    },

};