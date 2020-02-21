import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import { Route } from 'react-router-dom';
import Basket2 from './Basket2';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';


export const ProductPage = (props) => {
const {id} = useParams()
const [prod, setProd] = useState([])
const [basket, setBasket] = useState(props.cartItems)
const [items, setItems] = useState([])
const [cart, setCart] = useState()
const [carBasket, setCarBasket] = useState('')

    
const filter = e => {
    
}

console.log('PRODUCT', props.polo)
console.log('ID', id)
useEffect(() => {
    const product = props.polo.find(item => {
        return String(item.id) === id
     }) 
     
     console.log('PRODS', product)

    if(product !== undefined) {
        setProd([...prod, product])
        localStorage.setItem('product', [JSON.stringify(product)])
    }
}, [])

console.log('pr',prod)
function formatPrice(price) {
    return `$${(price * 0.01).toFixed(2)}`
}

function totalPrice(items) {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

useEffect(() => {
    const products = props.polo.filter(product => {
        return product.id === id
    
     }) 
     
    products.find(product => {
        if (product.cart_id === 1) {
            setCart([product])
           }

           return String(product.id) === id

     })
}, [])




console.log('cart',cart)

 console.log('bas',carBasket)
// function addToCart() {
//    const id = cart.map(item => {
//    const arrId = item.id.toString()
//    console.log(item)
//     localStorage.setItem("cart", [item.item_name, quantity,item.price * quantity ])
//     const shirt = {item_name: item.item_name, quantity: quantity, price: item.price * quantity}
//     setCarBasket(curr => [...curr, shirt])
//    return Number(arrId)


//     })

//     axios.put(`https://shirt-store123.herokuapp.com/api/inventory/${Number(id)}`, {"cart_id": localStorage.getItem('id')})
//       .then(res => {
//           console.log(res)

//       })
//       .catch(err => {
//           console.log(err)
//       })
// }

// function addToCart() {
//     const arr = []
//     setCarBasket(curr => [...curr, prod])
//     // if (shirt) {
//     // }
//     //    localStorage.setItem('userCart', JSON.stringify(prod))

//      }
    


function getCart() {
    const get = localStorage.getItem("cart")
   return setItems(get)

 }
 
    return (
        <div>
    <NavBar />
            {prod.length !== undefined ? prod.map(item => {
               return <div><img src={item.img} className='item-pic' alt='item-image'/> <div  className='item'><p>{item.item_name}</p> <p>{formatPrice(item.price)}</p> <p>{item.description} </p> </div><button onClick={props.addToCart} >Add to Cart <h2><FontAwesomeIcon className='icon' icon={faCartArrowDown} /></h2></button></div>
            }) : <p>...Loading</p>}
            <h1 onClick={props.add}>+</h1>
            <h1 onClick={props.minus}>-</h1>
            <h1>{props.quantity}</h1>
           

            <Footer />
            <button onClick={props.addToCart}>get</button>

        </div>
    )
}

export default ProductPage;