l0e.098exports = {
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
      
      


   0   client: 'sqlite3',
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
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations',
    },
    +
    +
    *59

    +7
    seeds: {
      directory: './database/seeds',
    },
  },
   // add the following
 

};