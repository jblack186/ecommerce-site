const localPg = {
  host: 'localhost',
  port: 5435, // You may need/want to change this
  database: 'postgres',
  user: 'postgres', // User and pass may be different for you
  password: 'test'  
  // ssl: true
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


  
//     production: {
//       client: 'pg',
//       connection: prodDbConnection,
//       useNullAsDefault: true,
//            migrations: {
//         directory: './database/migrations',
//       },
//       seeds: {
//         directory: './database/seeds',
//       },
//     },


};






  
