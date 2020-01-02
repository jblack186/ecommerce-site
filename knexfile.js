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
        host: '127.0.0.1',
        database: 'jamisonblackwell',
        user: "postgres",
        password: ""
        
      },       
      useNullAsDefault: true,
           migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      },
    },

};