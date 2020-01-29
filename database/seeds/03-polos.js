
exports.seed = function(knex) {

  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('polos').insert([
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 24, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "985483839224", quantity: 1, cart_id: 1, product_id: 1},
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 24, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "985483839224", quantity: 1, cart_id: 1, product_id: 1},
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 24, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "985483839224", quantity: 1, cart_id: 1, product_id: 1},
        {item_name: 'Fubu' , description: 'Made of all linen. Excellent fit.', price: 14, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "355483339224", quantity: 1, cart_id: 1, product_id: 2},
        {item_name: 'Nike' , description: 'Made of all leather. Excellent fit.', price: 268, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "755483839224", quantity: 1, cart_id: 1, product_id: 3},
        {item_name: 'Revy' , description: 'Made of all cotton. Excellent fit.', price: 14, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "855483839224", quantity: 1, cart_id: 1, product_id: 4},
        {item_name: 'Fubu' , description: 'Made of all linen. Excellent fit.', price: 14, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "355483339224", quantity: 1, cart_id: 1, product_id: 2},
        {item_name: 'Nike' , description: 'Made of all leather. Excellent fit.', price: 268, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "755483839224", quantity: 1, cart_id: 1, product_id: 3},
        {item_name: 'Revy' , description: 'Made of all cotton. Excellent fit.', price: 14, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "855483839224", quantity: 1, cart_id: 1, product_id:  4},
        {item_name: 'Fubu' , description: 'Made of all linen. Excellent fit.', price: 14, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "355483339224", quantity: 1, cart_id: 1, product_id: 2},
        {item_name: 'Nike' , description: 'Made of all leather. Excellent fit.', price: 268, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "755483839224", quantity: 1, cart_id: 1, product_id: 3},
        {item_name: 'Revy' , description: 'Made of all cotton. Excellent fit.', price: 14, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "855483839224", quantity: 1, cart_id: 1, product_id: 4},
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 124, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "744483839224", quantity: 1, cart_id: 1, product_id: 5},
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 234, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "855483839224", quantity: 1, cart_id: 1, product_id:  6},
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 54, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "955483839224", quantity: 1, cart_id: 1, product_id: 7},
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 84, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "345483839224", quantity: 1, cart_id: 1, product_id: 8},
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 22, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "655483839224", quantity: 1, cart_id: 1, product_id: 9},
        {item_name: 'TommyHillfiger' , description: 'Made of all cotton. Excellent fit.', price: 27, img: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sku: "852483839224", quantity: 1, cart_id: 1, product_id: 10}


      ]);
    };

