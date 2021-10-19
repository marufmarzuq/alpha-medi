import React from 'react';
import { Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
     const { imgURL, title, id } = service;
     return (
          <Col>
               <img className="service-img" src={imgURL} alt="" />
               <p className="service-title">{title}</p>
               <Link to={`/services/${id}`}>
                    <Button className='service-btn' variant="outline-primary">See Details</Button>
               </Link>
          </Col>
     );
};

export default Service;