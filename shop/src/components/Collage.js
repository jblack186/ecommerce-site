import React from 'react';
import './Collage.css';
import ImageOne from '../img/adrian-dascal-0TZAves0UL4-unsplash.jpg';
import ImageTwo from '../img/anomaly-WWesmHEgXDs-unsplash.jpg';

export default function Collage() {
    return (
        <div className='section-images'>
            <ul className='image-showcase'>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageOne} />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageTwo} />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageOne} />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageTwo} />
                    </figure>
                </li>
            </ul>
            <ul className='image-showcase'>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageOne} />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageTwo} />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageOne} />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageTwo} />
                    </figure>
                </li>

            </ul>
        </div>
    )
}