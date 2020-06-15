import React, {useState, useEffect} from 'react';
import './CategoryOne.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import SideBar from './SideBar';

const CategoryOne = (props) => {
    const [active, setActive] = useState(false)
 

    useEffect(() => {
      
            setActive(!active)
        
    }, [props.filter || props.polo])

   

    function formatPrice(price) {
        return `$${(price * 0.01).toFixed(2)}`
    }

    return (

        <div className='main-container'>
            <NavBar count={props.count} />
            <div className='containing'>
              
              <div className='bar-container'>
              
                <SideBar filter={props.filter} className='side-bar' />
              </div>
             
                <div className='item-container'>
                    <div className='items'>
                        {props.polo.map((item, index) => {  
                        return <div  key={index} className='super-container'>
                                    <NavLink style={{ color: 'black', textDecoration: 'none' }} exact to={`/productpage/${item.id}`}>
                                        <div>
                                        <div className='item-flex'>
                                            {localStorage.setItem('items', item.img)}
                                            {localStorage.setItem('name', item.item_name)}
                                            {localStorage.setItem('price', item.price)}
                                            {localStorage.setItem('description', item.description)}
                                        </div>
                                        <div className='img-contain'>
                                            <img  src={item.img} className={!active ? 'item-pic' : 'item-pic-active'}  alt='item-image'/> 
                                            </div>
                                            <div className={!active ? 'item-description' : 'item-description-active'}>
                                            <div className='descr'>
                                                <h3>{item.item_name}</h3> 
                                                <p>{item.description} </p> 
                                                <p className='price'>{formatPrice(item.price)}</p> 
                                            </div>
                                            </div>
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