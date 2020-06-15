import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Basket = () => {
    const [items, setItems] = useState([])


    function addCartItem(item) {
        setItems(item)
    }

    function formatPrice(price) {
        return `$${(price * 0.01).toFixed(2)}`
    }

    function totalPrice(items) {
        return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
    }

   
    
    return (
        <div>
            <Link exact to='/Basket2'>{items.length === 0 ? "Basket is empty" : <div> You have {items.length} product in cart</div> }</Link>
        </div>
    )
}

export default Basket;