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
     console.log(services)
     return (
          <section className="service-section" id="#services">
               <Container>
                    <Row>
                         <h2 className='text-center py-5'>Our Services</h2>
                    </Row>
                    <Row xs={2} md={3} lg={3}>
                         {
                              services.map(service => <Service key={service.id} service={service}></Service>)
                         }
                    </Row>
               </Container>
          </section>
     );
};

export default Services;