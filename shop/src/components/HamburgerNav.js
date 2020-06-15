import React, {useState} from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default function HamburgerNav () {
    const [openClose, setOpenClose] = useState(false);

    const toggle = e => {
        e.preventDefault();
        setOpenClose(!openClose);
    }


    return (
        <div>
            <div className='hamburger-nav'>
                <FontAwesomeIcon icon={faBars} onClick={toggle} />
                <ul className={openClose === false ? 'nav-closed' : 'nav-open'}>
                    <li><a href="/categoryone" style={{color: "white"}}>Shop</a></li>
                    <li><a href="/Basket2" style={{color: "white"}}>Checkout</a></li>
                    <li><a href="/" style={{color: "white"}}>Logout</a></li>
                </ul>
             </div>

        </div>
    )
}