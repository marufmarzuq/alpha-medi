import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import "./ServiceDetails.css"

const ServiceDetails = () => {
     const { id } = useParams('id');
     const [service, setService] = useState({});
     useEffect(() => {
          fetch(`https://raw.githubusercontent.com/marufmarzuq/json/master/alphamedi.services${id}.json`)
               .then(res => res.json()
               .then(data => setService(data)))
     }, [])
     const { title, imgURL, details, excerpt } = service;
     return (
          <>
               <Header></Header>
               <div className="service-details-page">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-6">
                                   <img className="img-fluid service-details-img" src={imgURL} alt="" />
                              </div>
                              <div className="col-md-6">
                                   <h2 className="display-4">{title}</h2>
                                   <p className="lead">{excerpt}</p>
                                   <Link to='/contact'>
                                        <Button variant="outline-primary w-100 py-2 mt-2">Make an appointment</Button>
                                   </Link>
                              </div>
                              <div className="col-md-12 pt-3">
                                   <h3 className="display-6">Details:</h3>
                                   <p>{ details }</p>
                              </div>
                         </div>
                    </div>
               </div>
               <Footer></Footer>
          </>
     );
};

export default ServiceDetails;