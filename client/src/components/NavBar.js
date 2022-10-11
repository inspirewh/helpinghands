import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/helpinghands-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from "react-bootstrap-icons";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    
    
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span> </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Link to="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About us</Link>
                <Link to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>How it Works</Link>
                <Link to="/donation-feed" className={activeLink === 'donationfeed' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('donationfeed')}>Donation Feed</Link>
                <Link to="/contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Get in touch</Link>


                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="www.facebook.com"><img src={navIcon1} alt="nav icon"/></a>
                        <a href="www.facebook.com"><img src={navIcon2} alt="nav icon"/></a>
                    </div>
                    <Link to="/contact">
                        <button className="main-btn" >Start Donating <ArrowRightCircle size={25} /></button>
                    </Link>
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )

}