const localPg = {
  host: process.env.host,
  database: process.env.database,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  
}

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
     

  
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      useNullAsDefault: true,
           migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      },
    },

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

};






  
