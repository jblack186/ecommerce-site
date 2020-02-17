import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Basket.css';


const Basket2 = (props) => {
    const [items, setItems] = useState([])
    const [quantity, setQuantity] = useState('')
    const [basket, setBasket] = useState()
    const [total, setTotal] = useState(0)


    useEffect(() => {
            const getCart = JSON.parse(localStorage.getItem("store"))
            if (getCart) {
            setBasket((getCart))
            }
    },[])

    function addCartItem(item) {
        setItems(item)
    }

    function more(e) {
        e.preventDefault();
        
    }

    function formatPrice(price) {
        return `$${(price * 0.01).toFixed(2)}`
    }

    useEffect(() => {
        const getCart = JSON.parse(localStorage.getItem("store"))
        if (getCart) {
        const tota = getCart.reduce((acc, item) => {

            return acc + item.price * item.quantity

        }, 0)
        console.log('TOTA', tota)
        setTotal(tota)
        }
    }, [])
    
console.log('TRUE',total)
    return (
        <div>
            <NavBar />
            <div className='contain-page'>
                <div className='cards-list'>
                    {basket !== undefined ? basket.map(item => {
                        
                        return <div className='cards'> 
                                    <div className='img-card-container'> 
                                        <img className='basket-img' src={item.img} /> 
                                        <div className='description'>
                                            <h1>{item.item_name}</h1> 
                                            <p>{item.description}</p> 
                                            <p>${item.price}</p> 
                                            <p>Qquantity: {item.quantity}</p> 

                                        </div>
                                    </div>
                                </div>
                        
                    }): <p><p>Nothing in cart</p><Link exact to="/categoryone">CLICK HERE TO GO BACK SHOPPING</Link></p> }
                    </div>
                <div className='total'>
                    <p>Total:</p><p>${total}</p> 
                    {quantity !== undefined ? <p>{quantity}</p> : null}
                </div>
             </div>
        </div>
    )
}
//<img  src={item.img} />
//<Link exact to='/Basket2'>{items === 0 ? "Basket is empty" : <div> You have {items.length} products in cart</div> }</Link> 

export default Basket2;