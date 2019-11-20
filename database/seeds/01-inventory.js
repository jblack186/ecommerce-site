
exports.seed = function(knex) {
  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('Polos').insert([
        {item_name: TommyHillfiger , description: 'Made of all cotton. Excellent fit.', price: 24,  },
        {item_name: TommyHillfiger , description: 'Made of all cotton. Excellent fit.', price: 24 },
        {item_name: TommyHillfiger , description: 'Made of all cotton. Excellent fit.', price: 24 },
        {item_name: TommyHillfiger , description: 'Made of all cotton. Excellent fit.', price: 24 },
        {item_name: TommyHillfiger , description: 'Made of all cotton. Excellent fit.', price: 24 },
        {item_name: TommyHillfiger , description: 'Made of all cotton. Excellent fit.', price: 24 },
        {item_name: TommyHillfiger , description: 'Made of all cotton. Excellent fit.', price: 24 },
        {item_name: TommyHillfiger , description: 'Made of all cotton. Excellent fit.', price: 24 },
        {item_name: TommyHillfiger , description: 'Made of all cotton. Excellent fit.', price: 24 },
        {item_name: TommyHillfiger , description: 'Made of all cotton. Excellent fit.', price: 24 }


      ]);
    };

