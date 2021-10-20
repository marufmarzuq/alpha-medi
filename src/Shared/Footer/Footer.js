import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
     return (
          <footer>
               <div className="footer-content">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-3 col-sm-6">
                                   <h2>About Us</h2>
                                   <p>
                                        <Link to="#">Our Mission & Values</Link> <br />
                                        <Link to="#">Leadership</Link> <br />
                                        <Link to="#">Transformation</Link> <br />
                                        <Link to="#">Awards</Link> <br />
                                        <Link to="#">Diversity is Our Specialty</Link> <br />
                                   </p>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                   <h2>Services</h2>
                                   <p>
                                        <Link to="#">Dental Dictionary</Link> <br />
                                        <Link to="#">Dental Sealands</Link> <br />
                                        <Link to="#">Dental Implants</Link> <br />
                                        <Link to="#">General Dentistry</Link> <br />
                                        <Link to="#">Sedation Dentistry</Link>
                                   </p>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                   <h2>Resources</h2>
                                   <p>
                                        <Link to="#">New Patients</Link> <br />
                                        <Link to="#">Meet the Team</Link> <br />
                                        <Link to="#">Patient Form</Link> <br />
                                        <Link to="#">Insurance</Link> <br />
                                        <Link to="#">Account Login</Link> <br />
                                   </p>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                   <h2>Our Address</h2>
                                   <p>
                                   Datobbo Dentistry 5212 Cedar <br />
                                   Village Dr Mason, NY. <br />
                                   Phone:+1 3500 5867 340 <br />
                                   Email:yourdomain@gmail.com <br />
                                   Fax:+1 675 5867 340
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="footer-copyright text-center py-3">
                    &copy; Copyright by Alpha Medi - 2021
               </div>
          </footer>
     );
};

export default Footer;