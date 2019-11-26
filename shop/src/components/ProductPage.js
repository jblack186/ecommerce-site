import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import Footer from './Footer';



const ProductPage = (props) => {
    const {id} = useParams()
    const [prod, setProd] = useState([])

const product = props.polo.find(product => {
   return String(product.id) === id
}) 

useEffect(() => {
    if(product !== undefined) {
        setProd([...prod, product])
    }
}, [product])


console.log(prod)

    return (
        <div>
            <NavBar />
            {prod.length !== undefined ? prod.map(item => {
               return <div><img src={item.img} className='item-pic' alt='item-image'/> <div  className='item'><p>{item.item_name}</p> <p>${item.price}</p> <p>{item.description} </p> </div><button>Add to Cart <h2><FontAwesomeIcon className='icon' icon={faCartArrowDown} /></h2></button></div>
            }) : <p>...Loading</p>}
            <Footer />
        </div>
    )
}

export default ProductPage;