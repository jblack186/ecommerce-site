import React, {useState} from 'react';

const Basket = (props) => {
    const [cartItems, setCartItems] = useState(props.cartItems)
    
    return (
        <div>
            {cartItems.length === 0 ? "Basket is empty" : <div> You have {cartItems.length} product in cart</div> }
        </div>
    )
}

export default Basket;