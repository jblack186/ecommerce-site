import React from 'react';
import './Header.css';
import Logo from './pics/Red Lines Sports Logo.png';

export default function Header() {
    return (
        <div className="contai">
            <header>
                <nav>
                    <div className="row-one">
                        <img src={Logo} alt="logo" className="logo" />
                        <ul className="main-nav">
                            <li><a href="/categoryone" style={{color: "white"}}>Shop</a></li>
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