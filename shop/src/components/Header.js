import React, {useState, useEffect} from 'react';
import './Header.css';
import Logo from './pics/Red.png';
import NavBar from './NavBar';
import { NavLink, Link } from 'react-router-dom';
import HamburgerNav from './HamburgerNav';


export default function Header(props) {
    const [scroll, setScroll] = useState(false);

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
                        <HamburgerNav />
                        <ul className="main-nav">
                            <NavLink exact to="/categoryone" style={{color: "white"}}><li>SHOP</li></NavLink>
                            <li><a href="" style={{color: "white"}}>About Us</a></li>
                            <li><a href="" style={{color: "white"}}>Contact</a></li>
                            <li><a href="" style={{color: "white"}}>Sign Up</a></li>
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
//his