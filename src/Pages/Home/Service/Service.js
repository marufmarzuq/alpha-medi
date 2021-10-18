import React from 'react';
import { Button, Col} from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
     const { imgURL, title } = service;
     console.log(service)
     return (
          <Col>
               <img className="service-img" src={imgURL} alt="" />
               <p className="service-title">{title}</p>
               <Button className='service-btn' variant="outline-primary">See Details</Button>
          </Col>
     );
};

export default Service;