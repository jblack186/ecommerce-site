import React, {useState, useEffect} from 'react';

const Routes = () => {

const [products, setProducts] = useState([])
const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [] )
const [addToCart, setAddToCart] = useState(() => (product, qty) =>{
        let carts = cart
        carts.push({
            product: product,
            qty_added: qty
        });
       if (carts) {
        // setCart(carts)
    
        localStorage.setItem('cart', JSON.stringify(carts))
       } else {
           return null
       }
    })


console.log(addToCart('Rev', 1))

return (
    <div>
        yo
    </div>
)

}
export default Routes;