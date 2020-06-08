const localPg = {
  host: 'ec2-34-232-147-86.compute-1.amazonaws.com',
port: 5432, // You may need/want to change this
  database: 'd4as6n07j4f2l4',
user: 'aerkjlkvvslrui', // User and pass may be different for you
  password: '1ffe9d78ede9618b30cf445d1faff7b0324f1c6756e27e698959ae2ab3783f9c',  
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






  
