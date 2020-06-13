import React, {useState, useEffect} from 'react';
import './Header.css';
import Logo from './pics/Red.png';
import NavBar from './NavBar';
import { NavLink, Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default function Header(props) {
    const [scroll, setScroll] = useState(false);
    const [openClose, setOpenClose] = useState(false);

    const toggle = e => {
        e.preventDefault();
        console.log('yep')
        setOpenClose(!openClose);
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 840;
            if (isTop !== true) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])
    return (
        <div className="contai">
        <nav className={ scroll ? "sticky" : "hide"} >
        <NavBar count={props.count} />
        </nav>
            <header>
                <nav>
                    <div className="row-one">
                        <img src={Logo} alt="logo" className="logo" />
                        <div className='hamburger-nav'>
                        <FontAwesomeIcon icon={faBars} onClick={toggle} />
                        <ul className={openClose === false ? 'nav-closed' : 'nav-open'}>
                            <li><a href="/categoryone" style={{color: "white"}}>Shop</a></li>
                            <li><a href="/Basket2" style={{color: "white"}}>Checkout</a></li>
                            <li><a href="/register" style={{color: "white"}}>Logout</a></li>
                        </ul>
                        </div>
                        <ul className="main-nav">
                            <NavLink exact to="/categoryone" style={{color: "white"}}><li>Shop</li></NavLink>
                            <li><a href="" style={{color: "white"}}>About Us</a></li>
                            <li><a href="" style={{color: "white"}}>Contact</a></li>
                            <li><a href="/register" style={{color: "white"}}>Sign Up</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="hero-text-box">
                    <h1>Find the perfect shirt.</h1> 
                    <a className="btns btns-ghost" href="/categoryone">Find the right fit</a>
                    <a className="btns btns-full" href="/login">Login</a>
                </div>
            </header>
        </div>
    )
}