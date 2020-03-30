import React from 'react';
import './Footer.css'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Footer () {


    return (
        <div className='icon-contain'>
            <div className='icons'>
            <FontAwesomeIcon icon={faFacebook} style={{color: 'darkGray', fontSize: '40px'}}/>          
            <FontAwesomeIcon icon={faInstagram} style={{color: 'darkGray', fontSize: '40px'}}/>            
            <FontAwesomeIcon icon={faTwitter} style={{color: 'darkGray', fontSize: '40px'}}/>           
             </div>
        <div className='contain'>
            <div className='footer-container'>
                <div className='footer-box'>
                <h3>Dress Shirts</h3>
                <p>Polo</p>
                <p>Business</p>
                <p>Casual</p>  
                </div>
                <div className='footer-box'>
                <h3>White Shirts</h3>
                <p>V-Neck</p>
                <p>Crew</p>
                </div>
                <div className='footer-box'>
                <h3>Contact</h3>
                <p>Customer Service</p>
                <p>Phone</p> 
                <p>Email</p>
                <p>Mail</p>
                </div>
                <div className='footer-box'>
                    <h3>Checkout</h3>
                    <p>Shipping Information</p>
                    <p>Payment Information</p>
                    <p>Returns</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;