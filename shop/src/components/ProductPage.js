import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import { Route } from 'react-router-dom';
import Basket2 from './Basket2';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';
import './ProductPage.css';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';



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
               return   <div className='prod-contain'>
                            <img src={item.img} className='pic' alt='item-image'/> 
                                <div  className='item'>
                                    <p className='name'>{item.item_name}</p> 
                                    <p className='about'>{item.description} </p> 
                                    <div className='quantity-button'>
                                        <div className='num-quantity'>
                                        <p className='quantity'>{props.quantity}</p>
                                        <div className='arrow'>
                                            <FontAwesomeIcon style={{color: '#333333'}} onClick={props.add} className='icon' icon={faArrowAltCircleUp} />
                                            <FontAwesomeIcon style={{color: '#333333'}} onClick={props.minus} className='icon' icon={faArrowAltCircleDown} />
                                            </div>
                                        </div>
                                        <p className='prices'>${item.price}</p>
                                        <div className='contain-button'>
                                            <button className='prod-button' onClick={props.addToCart} >Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
            }) : <p>...Loading</p>}
            
           

            <Footer />

        </div>
    )
}

export default ProductPage;