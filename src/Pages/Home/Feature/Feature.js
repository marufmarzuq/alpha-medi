import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Feature.css'
import icon1 from '../../../images/icons/icon1.svg'
import icon2 from '../../../images/icons/icon2.svg'
import icon3 from '../../../images/icons/icon3.svg'

const Feature = () => {
     return (
          <div>
               <Container className='my-5 feature'>
                    <Row xs={1} md={3} className="g-4 text-center">
                    <Col>
                         <Card className="p-4 m-3">
                         <Card.Img variant="top" src={icon1} className="mx-auto"/>
                         <Card.Body>
                              <Card.Title>Easy Appointment</Card.Title>
                         </Card.Body>
                         </Card>
                    </Col>
                    <Col>
                         <Card className="p-4 m-3">
                         <Card.Img variant="top" src={icon2} className="mx-auto"/>
                         <Card.Body>
                              <Card.Title>Emergency Service</Card.Title>
                         </Card.Body>
                         </Card>
                    </Col>
                    <Col>
                         <Card className="p-4 m-3">
                         <Card.Img variant="top" src={icon3} className="mx-auto"/>
                         <Card.Body>
                              <Card.Title>24/7 Service</Card.Title>
                         </Card.Body>
                         </Card>
                    </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default Feature;