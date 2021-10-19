import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
     const { user, logOut } = useAuth();
     return (
          <header>
               <Navbar bg="primary" variant="dark">
                    <Container>
                         <Navbar.Brand href="/"><img className="app-logo" src={logo} alt="" /></Navbar.Brand>
                         <Nav className="ms-auto">
                              <Link to="/home">Home</Link>
                              <Link to="/about-us">About Us</Link>
                              <Link to="/blog">Blog</Link>
                              <Link to="/contact">Contact</Link>
                              <span className="user-name">{ user?.displayName }</span>
                              {user?.email ? <Link to="/" className="btn-link" onClick={logOut}>Log out</Link> : <Link to="/login" className="btn-link">Login</Link>}
                         </Nav>
                    </Container>
               </Navbar>
          </header>
     );
};

export default Header;