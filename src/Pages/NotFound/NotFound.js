import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
     return (
          <div className="not-found">
               <Container>
                    <div className="not-found-img-container">
                         <div className="text-center">
                              <img src="https://i.ibb.co/Y3yYJdH/error.gif" alt="" /> <br />
                              <Link className="d-inline-block" to="/"><Button variant="outline-light">Go back to Home</Button></Link>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default NotFound;