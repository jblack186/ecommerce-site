import React from 'react';
import './NavBar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Anomaly } from '../img/anomaly-WWesmHEgXDs-unsplash.jpg';


function NavBar() {

    return (
            
            <div className='home-container'>
                <div>
                <div className='brand'>
                    <h1>RevTown</h1>
                 </div>
                </div>
                <div>
                    <div className='clothes-list'>
                        <Link exact to='/categoryone'><p className='clothes-links'>Polos</p></Link>    
                        <p className='clothes-links'>SHIRTS</p>    
                        <p className='clothes-links'>CRATE</p>    
                        <p className='clothes-links'>GIFTS</p>    
                    </div>
                </div>
                <div className='cart-about'>
                    <p>About Us</p>  
                    <h2><FontAwesomeIcon icon={faCartArrowDown} /></h2>
                </div>  
            </div>  
    )
}

export default NavBar;