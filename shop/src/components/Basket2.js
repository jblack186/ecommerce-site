import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Basket2 = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://shirt-store123.herokuapp.com/cart', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            .then(res => {
                console.log('res', res.data)
                setItems(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }, [])
        
        console.log('item', items)

    // useEffect(() => {
    //     axios.get("https://shirt-store123.herokuapp.com/api/users")
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // },[])

    // console.log('cart', props.cartItems)

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
            {/* <Link exact to='/Basket2'>{items === 0 ? "Basket is empty" : <div> You have {items.length} products in cart</div> }</Link> */}
            {items.length !== undefined ? items.map(item => {
                return <div> <p>{item.username}</p>  <h1>{item.item_name}</h1></div>
            }): null}
        </div>
    )
}

export default Basket2;