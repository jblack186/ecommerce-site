
exports.seed = function(knex) {

  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('polos').insert([
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 24, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {item_name: 'TommyHillfiger' , description: 'Made of all linen. Excellent fit.', price: 14, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {item_name: 'TommyHillfiger' , description: 'Made of all leather. Excellent fit.', price: 268, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 14, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 124, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 234, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 54, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 84, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 22, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 27, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }


      ]);
    };

