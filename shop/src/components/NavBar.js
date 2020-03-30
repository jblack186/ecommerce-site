import React from 'react';
import './NavBar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import { Anomaly } from '../img/anomaly-WWesmHEgXDs-unsplash.jpg';


function NavBar(props) {
    return (
            <div className='sticky'>
                <div className='home-container'>
                    
                    <div className='brands'>
                        <NavLink className='brand' style={{ color: 'black', textDecoration: 'none' }}  exact to='/'><h1>RevTown</h1></NavLink>

                    </div>
                    
                    <div>
                        <div className='clothes-list'>
                            <NavLink className='clothes-links' style={{ color: 'black', textDecoration: 'none' }} exact to='/categoryone'><li>POLOS</li></NavLink>    
                            <NavLink className='clothes-links' style={{ color: 'black', textDecoration: 'none' }}  exact to=''><li>SHIRTS</li></NavLink>   
                            <NavLink style={{ color: 'black', textDecoration: 'none' }}  exact to=''><li className='clothes-links'>CRATE</li></NavLink>    
                            <NavLink style={{ color: 'black', textDecoration: 'none' }}  exact to=''><li className='clothes-links'>GIFTS</li></NavLink>    
                        </div>
                    </div>
                    <div className='cart-about'>
                        <p>About Us</p>  
                        <NavLink exact to ='/Basket2'><div><FontAwesomeIcon icon={faCartArrowDown} /></div></NavLink>
                        <p>{props.count}</p>
                    </div>  
                    
                </div> 

            </div>
    )
}

export default NavBar;