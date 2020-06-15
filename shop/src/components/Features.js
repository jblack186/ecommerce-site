import React from 'react';
import './Features.css';
import '@ionic/react/css/core.css';
import Home from '../img/home-outline.svg';


export default function Features() {
    return (
        <div className="container">
            <div className='section-features'>
                <div className='row'>
                    <div className='head-two'>
                        <h2>Best shirts &mdash; great quality</h2>
                    </div>
                    <div className='long-copy-container'>
                        <p className='long-copy'>
                            Hello, were Omnifood, your new premium food delivery service. e know you're always busy. No time fpr cooking. 
                            So let us take care of that, we're really good at it, we promise!
                        </p>
                    </div>
                </div>

                <div className='crow'>
                    <div className='test'>
                                <img src={Home} style={{width: '38px'}}/>
                                <h3>Up to 365 days/year</h3>
                                <p className='long-copy'>
                                Hello, were Omnifood, your new premium food delivery service. e know you're always busy. No time fpr cooking. 
                                So let us take care of that, we're really good at it, we promise!
                            </p>

                            </div>
                            <div className='test'>
                                <img src={Home} style={{width: '38px'}}/>
                                <h3>Up to 365 days/year</h3>
                                <p className='long-copy'>
                                Hello, were Omnifood, your new premium food delivery service. e know you're always busy. No time fpr cooking. 
                                So let us take care of that, we're really good at it, we promise!
                            </p>

                            </div>
                            <div className='test'>
                                <img src={Home} style={{width: '38px'}}/>
                                <h3>Up to 365 days/year</h3>
                                <p className='long-copy'>
                                Hello, were Omnifood, your new premium food delivery service. e know you're always busy. No time fpr cooking. 
                                So let us take care of that, we're really good at it, we promise!
                            </p>

                            </div>
                            <div className='test'>
                                <img src={Home} style={{width: '38px'}}/>
                                <h3>Up to 365 days/year</h3>
                                <p className='long-copy'>
                                Hello, were Omnifood, your new premium food delivery service. e know you're always busy. No time fpr cooking. 
                                So let us take care of that, we're really good at it, we promise!
                            </p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}