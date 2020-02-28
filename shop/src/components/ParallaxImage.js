import React, {useEffect} from 'react';
import './Parallax.css'
import M from 'materialize-css'; 
import ImageTwo from '../img/anomaly-WWesmHEgXDs-unsplash.jpg';
import { Parallax, Image } from 'react-scroll-parallax';

    
 const ParallaxImage = () => {
    return (
        <div className="">
            <div className='pimg1'>
                <div className='ptext'>
                    <span className='border'>
                        Parallax Website
                    </span>
                </div>
            </div>
            <section className='section section-light'>
                <h2>Section One</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable
                </p>
            </section>
            <div className='pimg2'>
                <div className='ptext'>
                    <span className='border'>
                        Image Two Text
                    </span>
                </div>
            </div>
            <section className='section section-dark'>
                <h2>Section Two</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable
                </p>
            </section>
            <div className='pimg3'>
                <div className='ptext'>
                    <span className='border'>
                        Image Two Three
                    </span>
                </div>
            </div>
            <section className='section section-dark'>
                <h2>Section Three</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable
                </p>
            </section>



        </div>
    )

}
export default ParallaxImage;