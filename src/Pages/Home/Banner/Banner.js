import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
     return (
          <div className="home-banner">
               <Container>
                    <h2 className="banner-qoute">“</h2>
                    <h2 className='banner-text'>We push the limits <br />
                         of what's possible <br />
                         for our patients
                    </h2>
                    <Button variant="light" className="py-3 px-5 mt-3 banner-btn">
                         <Link to="#services">Our Services</Link>
                    </Button>
               </Container>
          </div>
     );
};

export default Banner;