import React from 'react';
import { Container, Button } from 'react-bootstrap';
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
                    <Button variant="outline-light" className="py-3 px-5 mt-3 banner-btn">
                         <a href="#services">Our Services</a>
                    </Button>
               </Container>
          </div>
     );
};

export default Banner;