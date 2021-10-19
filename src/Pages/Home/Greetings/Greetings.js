import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Greetings.css'
const Greetings = () => {
     return (
          <div className="greetings-section">
               <div className="container py-4">
                    <div className="row">
                         <div className="col-md-6 align-items-center d-flex">
                              <div>
                              <h2 className="text-primary fs-2">Bring Care To Your</h2>
                              <h2 className="display-5">Home With One Click</h2>
                              <p className="lead">From treating the rarest symptoms to performing the most complicated surgeries, we have expertise in your condition. </p>
                              <Link to="/about-us">
                                   <Button variant="outline-primary" className="py-3 px-5 me-3">About Us</Button>
                              </Link>
                              <Link to="/contact">
                                   <Button variant="primary" className="py-3 px-5">Contact</Button>
                              </Link>
                              </div>
                         </div>
                         <div className="col-md-6 position-relative">
                              <img src="http://amentotech.com/htmls/doclist/images/doc-imgs/img-01.png" alt="" />
                              <div className="floating-greetings-tex">
                                   <p>Greetings & Welcome</p>
                                   <h3>Dr. Tyrone Grindle</h3>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Greetings;