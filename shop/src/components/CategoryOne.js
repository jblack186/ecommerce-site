import React, {useState, useEffect} from 'react';
import './CategoryOne.css';
import NavBar from './NavBar';
import axios from 'axios';
import Footer from './Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import {useParams} from 'react-router';


const CategoryOne = (props) => {
    const [polos, setPolos] = useState([])
    useEffect(() => {
        axios.get("https://shirt-store123.herokuapp.com/api/inventory")
            .then(res => {
                setPolos(res.data)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

const id = polos.filter(id => {
   return id = id
})
console.log(id)

    return (

        <div>
            <NavBar />
            <div className='contain'>
                <div className='side-bar'>
                  <ul>
                    <li>T-Shirts</li>
                    <li>V-Necks</li>
                    <li>Sweatshirts</li>
                    <li>Hoodies</li>
                    <li>Tanks</li>
                    <li>T-Shirts</li>
                    <li>V-Necks</li>
                    <li>Sweatshirts</li>
                    <li>Hoodies</li>
                    <li>Tanks</li>
                  </ul>
                </div>
                <div className='item-container'>

                    {polos.map(item => {                
                    return <Link exact to={`/productpage/${item.id}`}><div><img src={item.img} className='item-pic' alt='item-image'/> <div  className='item'><p>{item.item_name}</p> <p>${item.price}</p> <p>{item.description} </p> <button>Add to Cart <h2><FontAwesomeIcon className='icon' icon={faCartArrowDown} /></h2> </button></div></div></Link>                          
                    })}
                
                    
                </div>
            </div>     
            <Footer />
        </div>
    )
}

export default CategoryOne;