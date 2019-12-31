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
      useNullAsDefault: true,
      connection: {
        connectionString: process.env.DATABASE_URL,
      },
      searchPath: ['knex', 'public'],
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
      debug: true
    }
  
  

};