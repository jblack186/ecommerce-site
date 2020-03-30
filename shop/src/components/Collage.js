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
            <ul className={scroll ? 'image-showcase showcaseTwo' : 'hideTwo'}>
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

export default Collage;