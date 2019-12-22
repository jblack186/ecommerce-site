import React, {useState, useEffect} from 'react';
import './CategoryOne.css';
import NavBar from './NavBar';
import axios from 'axios';
import Footer from './Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import {useParams, useLocation, useHistory} from 'react-router';


const CategoryOne = (props) => {
    const location = useLocation();
    const history = useHistory();
    
  
    console.log(location)
   
    function click(){
        history.push('/');
    }

    function formatPrice(price) {
        return `$${(price * 0.01).toFixed(2)}`
    }

    function totalPrice(items) {
        return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
    }

console.log(props.polo)
    return (

        <div>
            <NavBar />
            <div className='contain'>
                <div className='side-bar'>
                  <ul>
                    <li>T-Shirts</li>
                    <li>V-Necks</li>
                    <li>Sweatshirts</li>
                    <li>Hoodies</li>
                    <li>Tanks</li>
                    <li>T-Shirts</li>
                    <li>V-Necks</li>
                    <li>Sweatshirts</li>
                    <li>Hoodies</li>
                    <li>Tanks</li>
                  </ul>
                </div>
                <div className='item-container'>

                    {props.polo.map(item => {                
            return <div><Link exact to={`/productpage/${item.id}`}><img src={item.img} className='item-pic' alt='item-image'/> <div  className='item'><p>{item.item_name}</p> <p>{formatPrice(item.price)}</p> <p>{item.description} </p> </div></Link><button onClick={click}>Add to Cart <h2><FontAwesomeIcon className='icon' icon={faCartArrowDown} /></h2></button></div>                    
                    })}
                
                <tr>

                </tr>
                </div>
            </div> 

            <Footer />
        </div>
    )
}

export default CategoryOne;