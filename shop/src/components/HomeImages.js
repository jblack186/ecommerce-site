import React from 'react';
import './HomeImages.css';
import Footer from './Footer';
import Anomaly from '../img/anomaly-WWesmHEgXDs-unsplash.jpg';
import Banter from '../img/banter-snaps-eLOwnWvK9Fk-unsplash (1).jpg';
import Dale from '../img/dale-alejandro-RYrMPoxzaZ0-unsplash.jpg';
import Collage from './Collage';
import Features from './Features';
import Header from './Header';

const HomeImages = () => {




    return (
        <div className='home-images-container'>
            <Header />
            <div className='home-images'>
                <div>
                    <div className='overlay'>
                        <p className='text'>White Shirts</p>
                        <button id='overlay-button' type="button" class="btn btn-primary">Shop</button>
                    </div>
                        <img className='white-shirt' className='home-image' src={Anomaly} alt='' />
                       
                    
                </div>
                 <div>
                 <div className='overlay'>
                        <p className='text'>Dress Shirts</p>
                        <button id='overlay-button' type="button" className="btn btn-primary">Shop</button>
                    </div>

                     <img className='home-image' src={Banter} alt='' />
                </div>
                <div>
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