import React, {useState, useEffect} from 'react';
import './Collage.css';
import ImageOne from '../img/adrian-dascal-0TZAves0UL4-unsplash.jpg';
import ImageTwo from '../img/anomaly-WWesmHEgXDs-unsplash.jpg';

const Collage = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 1500;
            if (isTop !== true) {
                setScroll(true)
            } 
        })
    }, [])

    return (
        <div className='section-images'>
            <ul className={scroll ? 'image-showcase' : 'hideOne'}>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageOne} alt='cools' />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageTwo} alt='coolz' />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageOne} alt='coolh' />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageTwo} alt='coole' />
                    </figure>
                </li>
            </ul>
            <ul className={scroll ? 'image-showcase showcaseTwo' : 'hideTwo'}>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageOne} alt='cohgol' />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageTwo} alt='cgool' />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageOne} alt='cfool'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img className='collage-img' src={ImageTwo} alt='coorl'/>
                    </figure>
                </li>

            </ul>
        </div>
    )
}

export default Collage;