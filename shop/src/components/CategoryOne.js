import React, {useState, useEffect} from 'react';
import './CategoryOne.css';
import NavBar from './NavBar';
import axios from 'axios';
import Footer from './Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import {useParams, useLocation, useHistory} from 'react-router';
import SideBar from './SideBar';

const CategoryOne = (props) => {
    const location = useLocation();
    const history = useHistory();
    const [polos, setPolos] = useState();
    const [active, setActive] = useState(false)
    const [loading, setLoading] = useState(false)
    const [length, setLength] = useState()
 
    useEffect(() => {
        setLength(props.polo.length)

    }, [])



    console.log('PROPS', loading)
console.log(length)
    useEffect(() => {
      
            setActive(!active)
        
    }, [props.filter || props.polo])

   
console.log('ACTIVE',active)

    function slide(){
       
    }

    function formatPrice(price) {
        return `$${(price * 0.01).toFixed(2)}`
    }

    function totalPrice(items) {
        return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
    }

console.log("pprod", props.polo)
console.log("pprod2", props.poloCart)

    return (

        <div className='main-container'>
            <NavBar />
            <div className='contain'>
         
              <div className='bar-container'>
              
                <SideBar filter={props.filter} className='side-bar' />
              </div>
             
                <div className='item-container'>
                    <div className='items'>
                        {props.polo.map(item => {  
                        return <div className='super-container'>
                                    <NavLink className={!loading ? 'item-description' : 'item-active'} activeStyle={{ color: 'black' }} exact to={`/productpage/${item.id}`}>
                                        <div>
                                        <div className='img-contain'>
                                            <img src={item.img} className={!active ? 'item-pic' : 'item-pic-active'}  alt='item-image'/> 
                                            </div>
                                            <p>{item.item_name}</p> 
                                                <p>{formatPrice(item.price)}</p> 
                                                <p>{item.description} </p> 
                                          
                                        </div>
                                    </NavLink>
                                </div>                    
                        })}
                    </div>
                </div>
            </div> 

            <Footer />
        </div>
    )
}

export default CategoryOne;