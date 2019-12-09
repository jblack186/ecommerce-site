import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Basket2 = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("https://shirt-store123.herokuapp.com/api/users")
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    console.log('cart', props.cartItems)

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

export default Basket2;