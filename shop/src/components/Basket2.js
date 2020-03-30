import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import './Basket.css';
import { Dropdown, Form, Button, Col } from 'react-bootstrap';


const Basket2 = (props) => {
    const [quantity, setQuantity] = useState('')
    const [basket, setBasket] = useState()
    const [total, setTotal] = useState(0)


    useEffect(() => {
            const getCart = JSON.parse(localStorage.getItem("store"))
            if (getCart) {
            setBasket((getCart))
            }
    },[props.removeItem])


    function formatPrice(price) {
        return `$${(price * 0.01).toFixed(2)}`
    }

    useEffect(() => {
        const getCart = JSON.parse(localStorage.getItem("store"))
        if (getCart) {
        const tota = getCart.reduce((acc, item) => {

            return acc + item.price * item.quantity

        }, 0)
        console.log('TOTA', tota)
        setTotal(tota)
        }
    }, [props.removeItem])

    
console.log('TRUE', basket)
    return (
            <div>
            <NavLink exact to="/categoryone" style={{ color: 'white', textDecoration: 'none' }}><div className='cart-header' >
                <h1>RevTown</h1>
            </div></NavLink>
            <div className='cart-container'>
            <div className='cart-form'>
            <div className='form-contain'>
            <h3>Shipping Information</h3>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Enter First name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Enter Last name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Address" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Address 2" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" value="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Continue to Shipping
                </Button>
        </Form>
        </div>
        </div>
        <div className='contain-page'>
            <div>
                <div className='cards-list'>
                {basket 
                    ? basket.map((item, index) => {
                        return <div className='cards'> 
                                    <div className='img-card-container'> 
                                        <img className='basket-img' src={item.img} /> 
                                        <div className='description'>
                                            <h1>{item.item_name}</h1> 
                                            <p>{item.description}</p> 
                                            <p>${item.price}</p> 
                                            <p>Qquantity: {item.quantity}</p> 
                                            <button className='remove' onClick={() => props.removeItem(index)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                        
                    }): null }
                    {basket === undefined || basket.length === 0 ?
                        <p className='notta'><p>Nothing in cart</p><Link exact to="/categoryone">CLICK HERE TO GO BACK SHOPPING</Link></p>
                    : null}
                    </div>
                <div className='total'>
                    <h4>Total:</h4><p>${total}</p> 
                    
                </div>
             </div>
             </div>
             </div>
        </div>
    )
}
//<img  src={item.img} />
//<Link exact to='/Basket2'>{items === 0 ? "Basket is empty" : <div> You have {items.length} products in cart</div> }</Link> 

export default Basket2;