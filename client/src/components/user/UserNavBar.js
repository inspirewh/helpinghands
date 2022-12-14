import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../../assets/img/helpinghands-logo.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from "react-bootstrap-icons";

export const UserNavBar = () => {
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
                <Navbar.Brand href="/home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span> </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Link to="/donate" className={activeLink === 'donate' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>Get Donating</Link>
                <Link to="/dashboard" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Recent Donations</Link>
                <Link to="/donations-feed" className={activeLink === 'donationfeed' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('donationfeed')}>Donation Feed</Link>
                <Link to="/connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Get in touch</Link>


                </Nav>
                <span className="navbar-text">
                    <Link to="/" id="loginbtn" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Logout</Link>
                    <div className="social-icon">
                        <a href="www.facebook.com"><img src={navIcon1} alt="nav icon"/></a>
                        <a href="www.facebook.com"><img src={navIcon2} alt="nav icon"/></a>
                    </div>
                    <Link to="/donate">
                        <button className="main-btn" >Get Donating <ArrowRightCircle size={25} /></button>
                    </Link>
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )

}