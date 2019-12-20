
exports.seed = function(knex) {

  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('flannel').insert([
        {item_name: 'Gildan' , description: 'Made of all cotton. Excellent fit.', price: 342400, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "981283839224", quantity: 1, cart_id: 2},
        {item_name: 'Legendary' , description: 'Made of all linen. Excellent fit.', price: 1400, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "445483339224", quantity: 1, cart_id: 1},
        {item_name: 'Perfit' , description: 'Made of all leather. Excellent fit.', price: 26800, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "645483839224", quantity: 1, cart_id: 2},
        {item_name: 'Revy' , description: 'Made of all cotton. Excellent fit.', price: 1400, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "5483839224", quantity: 1, cart_id: 2 },
        {item_name: 'Gildan' , description: 'Made of all cotton. Excellent fit.', price: 12400, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "542483839224", quantity: 1, cart_id: 1},
        {item_name: 'Gildan' , description: 'Made of all cotton. Excellent fit.', price: 23400, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "35483839224", quantity: 1, cart_id: 2 },
        {item_name: 'Gildan' , description: 'Made of all cotton. Excellent fit.', price: 5400, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "64583839224", quantity: 1, cart_id: 1 },
        {item_name: 'Gildan' , description: 'Made of all cotton. Excellent fit.', price: 8400, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "3453839224", quantity: 1, cart_id: 2 },
        {item_name: 'Gildan' , description: 'Made of all cotton. Excellent fit.', price: 2200, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "93583839224", quantity: 1, cart_id: 1 },
        {item_name: 'Gildan' , description: 'Made of all cotton. Excellent fit.', price: 2700, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "742483839224", quantity: 1, cart_id: 2 }


      ]);
    };

