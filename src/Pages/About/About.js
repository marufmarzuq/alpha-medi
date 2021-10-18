import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './About.css'

const About = () => {
     return (
          <>
               <Header></Header>
               <div className="container about-section">
                    <div className="row">
                         <div className="col-md-5 position-relative">
                              <img className="img-fluid" src="https://i.ibb.co/grCWjxf/about-us.webp" alt="" />
                              <div className="about-img-text">
                                   <h3>Best Awarded Hospital</h3>
                                   <p>Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry.</p>
                              </div>
                         </div>
                         <div className="col-md-7">
                              <p>WHAT WE DO</p>
                              <h2 className="about-page-title">True Healthcare For Your Family</h2>
                              <p className="lead">Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.</p>
                              <p className="lead">
                              Dr. Harrie believes in providing her patients with more than just world class dental care. He also helps patients recognize the vital connection between dental health and whole body health. A graduate of the University of California’s School of Dentistry, Dr. Harrie is a leader in the movement to bring environmental sanity and well-being into the dental world for future
                              </p>
                              <div className="fs-5">
                                   <p><i className="fas fa-check-circle text-primary"></i> Consolation</p>
                                   <p><i className="fas fa-check-circle text-primary"></i> Familiarity</p>
                                   <p><i className="fas fa-check-circle text-primary"></i> Outcome</p>
                              </div>
                         </div>
                    </div>
               </div>
               <Footer></Footer>
          </>
     );
};

export default About;