import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';



const ProductPage = (props) => {
    const {id} = useParams()
    const [prod, setProd] = useState([])
    const [basket, setBasket] = useState(props.cartItems)
    const [items, setItems] = useState([])
    const [cart, setCart] = useState()

    
console.log('items', items)
console.log('props', props.polo)
const product = props.polo.find(product => {
   return String(product.id) === id
}) 

useEffect(() => {
    if(product !== undefined) {
        setProd([...prod, product])
    }
}, [product])

// const addToCart = (e) => {
//     e.preventDefault();
//     const cartItems = basket;
//     let productAlreadyInCart = false;

//     cartItems.forEach(cp => {
//         if (cp.id === product.id) {
//           cp.count += 1;
//           productAlreadyInCart = true;
//         }
//       });

//     if(!productAlreadyInCart){
//         cartItems.push({...product, count:1})
//     }

//     localStorage.setItem("basket", JSON.stringify(cartItems))
//     return basket
// }

function formatPrice(price) {
    return `$${(price * 0.01).toFixed(2)}`
}

function totalPrice(items) {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

useEffect(() => {
    const product = props.polo.find(product => {
        return String(product.id) === id
     })    
      setCart([product])
    
}, [product])
console.log(cart)

function addToCart() {
   const id = cart.map(item => {
   const arrId = item.id.toString()
   return Number(arrId)

    })
    console.log(Number(id))
    axios.put(`https://shirt-store123.herokuapp.com/api/inventory/${Number(id)}`, {"cart_id": 5})
      .then(res => {
          console.log(res)
      })
      .catch(err => {
          console.log(err)
      })
}


    return (
        <div>
            <NavBar />
            {prod.length !== undefined ? prod.map(item => {
               return <div><img src={item.img} className='item-pic' alt='item-image'/> <div  className='item'><p>{item.item_name}</p> <p>{formatPrice(item.price)}</p> <p>{item.description} </p> </div><button onClick={addToCart} >Add to Cart <h2><FontAwesomeIcon className='icon' icon={faCartArrowDown} /></h2></button></div>
            }) : <p>...Loading</p>}
            <Footer />
        </div>
    )
}

export default ProductPage;