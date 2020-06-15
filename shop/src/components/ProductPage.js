import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NavBar from './NavBar';
import Footer from './Footer';
import './ProductPage.css';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';



export const ProductPage = (props) => {
const {id} = useParams()
const [prod, setProd] = useState([])




useEffect(() => {
    const product = props.polo.find(item => {
        return String(item.id) === id
     }) 
     

    if(product !== undefined) {
        setProd([...prod, product])
        localStorage.setItem('product', [JSON.stringify(product)])
    }
}, [])


useEffect(() => {
    const products = props.polo.filter(product => {
        return product.id === id
    
     }) 
     
    products.find(product => {
        if (product.cart_id === 1) {
           }
           return String(product.id) === id

     })
}, [])


    return (
        <div>
    <NavBar count={props.count} />
    <div className='p-container'>
            {prod ? prod.map(item => {
                return   <div className='prod-contain'>
                             <img src={localStorage.getItem('items')} className='pic' alt='item-image'/> 
                                 <div  className='item'>
                                     <p className='name'>{localStorage.getItem('name')}</p> 
                                     <p className='about'>{localStorage.getItem('description')} </p> 
                                     <div className='quantity-button'>
                                         <div className='num-quantity'>
                                         <p className='quantity'>{props.quantity}</p>
                                         <div className='arrow'>
                                             <FontAwesomeIcon style={{color: '#333333'}} onClick={props.add} className='icon' icon={faArrowAltCircleUp} />
                                             <FontAwesomeIcon style={{color: '#333333'}} onClick={props.minus} className='icon' icon={faArrowAltCircleDown} />
                                             </div>
                                         </div>
                                         <p className='prices'>${localStorage.getItem('price')}</p>
                                     </div>
                                     <div className='button-container'>
                                        <button className='prod-button' onClick={props.addToCart}>Add to Cart</button>
                                    </div>
                                 </div>
                         </div>
             })  : null }
             
            <Footer />
            </div>
        </div>
    )
}

export default ProductPage;