import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
     const [services, setServices] = useState([])
     useEffect(() => {
          fetch('./services.json')
               .then(res => res.json())
          .then(data=> setServices(data))
     }, [])
     return (
          <section className="service-section" id="#services">
               <Container>
                    <Row>
                         <p className="text-center services-text">SERVICES</p>
                         <h2 className='text-center pb-5'>What You Can Do With AlphaMedi</h2>
                    </Row>
                    <Row xs={1} md={3} lg={3}>
                         {
                              services.map(service => <Service key={service.id} service={service}></Service>)
                         }
                    </Row>
               </Container>
          </section>
     );
};

export default Services;