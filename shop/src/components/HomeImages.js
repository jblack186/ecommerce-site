import React, {useState, useEffect} from 'react';
import './HomeImages.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Anomaly from '../img/anomaly-WWesmHEgXDs-unsplash.jpg';
import Banter from '../img/banter-snaps-eLOwnWvK9Fk-unsplash (1).jpg';
import Dale from '../img/dale-alejandro-RYrMPoxzaZ0-unsplash.jpg';
import Adrian from '../img/sajiam-n8bZJpA0hig-unsplash.jpg';
import axios from 'axios';

const HomeImages = (props) => {
    const [message] = useState(localStorage.getItem('user'))
    const [cookie, setCookie] = useState('')
    const [cart, setCart] = useState('')
console.log('props', sessionStorage.getItem('cookie'))

// useEffect(() => {
//  const cookie = sessionStorage.getItem('cookie') 
//  setCookie(cookie)   

// }, [])
// console.log('c', cookie)

// useEffect(() => {
//     axios.get('https://shirt-store123.herokuapp.com/cart')
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }, [])

useEffect(() => {
axios.get('https://shirt-store123.herokuapp.com/cart', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
    .then(res => {
        console.log(res.data)
        localStorage.setItem('id', res.data.user_id)

    })
    .catch(err => {
        console.log(err)
    })
}, [])






// const test = e => {
//     e.preventDefault();
// axios.get('https://shirt-store123.herokuapp.com/api/users/users', {headers: {Authorization: `Bearer ${sessionStorage.getItem('cookie')}`}})
// .then(res => {
//     console.log(res)
// })
// }

    return (
        <div>
            <NavBar />
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
                        <button id='overlay-button' type="button" class="btn btn-primary">Shop</button>
                    </div>

                     <img className='home-image' src={Banter} alt='' />
                </div>
                <div className='image-box'>
                <div className='overlay'>
                        <p className='text'>Casual Shirts</p>
                        <button id='overlay-button' type="button" class="btn btn-primary">Shop</button>
                    </div>

                    <img className='home-image' src={Dale} alt='' />
                </div>
            </div> 
            <div className='mid-content'>
                <div className='text-container'>
                    <p className='mid-text'>Find the best fitting shirt you'll ever own.</p>
                </div>
                <div className='first-image'>
                    <img className='mid-image' src={Adrian} alt='' />
                    <button className='content-button'><p className='button-text'>Search here for the perfect fit</p></button>                
                </div>                
            </div>
            <Footer />
        </div>
    )
}

export default HomeImages;