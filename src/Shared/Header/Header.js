import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
     const {user, logOut} = useFirebase()
     return (
          <header>
               <Navbar bg="primary" variant="dark">
                    <Container>
                         <Navbar.Brand href="/">AlphaMedi</Navbar.Brand>
                         <Nav className="ms-auto">
                              <Link to="/home">Home</Link>
                              <Link to="/about-us">About Us</Link>
                              <Link to="/blog">Blog</Link>
                              <Link to="/contact">Contact</Link>
                              {user?.email ? <Link to="/" className="btn-link" onClick={logOut}>Log out</Link> : <Link to="/login" className="btn-link">Login</Link>}
                         </Nav>
                    </Container>
               </Navbar>
          </header>
     );
};

export default Header;