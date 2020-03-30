import React from 'react';
import './HomeImages.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Anomaly from '../img/anomaly-WWesmHEgXDs-unsplash.jpg';
import Banter from '../img/banter-snaps-eLOwnWvK9Fk-unsplash (1).jpg';
import Dale from '../img/dale-alejandro-RYrMPoxzaZ0-unsplash.jpg';
import Adrian from '../img/sajiam-n8bZJpA0hig-unsplash.jpg';
import axios from 'axios';
import Collage from './Collage';
import Features from './Features';
import Header from './Header';

const HomeImages = (props) => {




    return (
        <div>
            <Header />
            <div className='home-images'>
                <div className='image-box'>
                    <div className='overlay'>
                        <p className='text'>White Shirts</p>
                        <button id='overlay-button' type="button" class="btn btn-primary">Shop</button>
                    </div>
                        <img className='white-shirt' className='home-image' src={Anomaly} alt='' />
                       
                    
                </div>
                 <div className='image-box'>
                 <div className='overlay'>
                        <p className='text'>Dress Shirts</p>
                        <button id='overlay-button' type="button" className="btn btn-primary">Shop</button>
                    </div>

                     <img className='home-image' src={Banter} alt='' />
                </div>
                <div className='image-box'>
                <div className='overlay'>
                        <p className='text'>Casual Shirts</p>
                        <button id='overlay-button' type="button" className="btn btn-primary">Shop</button>
                    </div>

                    <img className='home-image' src={Dale} alt='' />
                </div>
            </div> 
            <Features />
            <Collage />
            <Footer />
        </div>
    )
}

export default HomeImages;