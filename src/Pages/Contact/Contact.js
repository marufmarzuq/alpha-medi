import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Contact.css'

const Contact = () => {
     return (
          <>
               <Header></Header>
               <div className="container py-3">
                    <div className="contact-title text-center py-5">
                         <p className="m-0 text-primary">GET IN TOUCH</p>
                         <h2 className="fs-1">We want to share our <br />
                              locationto find us easily.
                         </h2>
                    </div>

                    <div className="container text-center contact py-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                         <div className="col">
                              <div className="card h-100">
                                   <i className="fas fa-map-signs text-primary"></i>
                                   <div className="card-body">
                                        <h5 className="card-title">Our Address</h5>
                                        <p className="card-text">PSD Building, 2 AlBahr St, Loskia sripur, jamukara.</p>
                                   </div>
                              </div>
                         </div>
                         <div className="col">
                              <div className="card h-100">
                              <i className="fas fa-phone text-primary"></i>
                                   <div className="card-body">
                                        <h5 className="card-title">Our Phone</h5>
                                        <p className="card-text">Office Telephone : 0029129102320 <br />
                                             Mobile : 000 2324 39493</p>
                                   </div>
                              </div>
                         </div>
                         <div className="col">
                              <div className="card h-100">
                              <i className="fas fa-envelope-open-text text-primary"></i>
                                   <div className="card-body">
                                        <h5 className="card-title">Our Email</h5>
                                        <p className="card-text">Main Email : name@website.com <br />
                                             Inquiries : Info@orex.com</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    </div>
               </div>
               <div className="container pb-5">
                    <div className="row py-5">
                         <div className="col-md-6">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116821.07606601623!2d90.40983134516603!3d23.795167624953205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634584331890!5m2!1sen!2sbd" width="100%" height="100%" style={{border:0}} loading="lazy"></iframe>
                         </div>
                         <div className="col-md-6">
                              <form className="row g-3">
                                   <div className="col-md-6">
                                        <div className="form-floating mb-2">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Jhon Doe"/>
                                        <label htmlFor="floatingInput">Full Name</label>
                                        </div>
                                   </div>
                                   <div className="col-md-6">
                                        <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                        <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                   </div>

                                   <div className="col-12">
                                        <div className="form-floating mb-2">
                                             <textarea style={{ height: 150}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                        <label htmlFor="floatingTextarea">Your Message</label>
                                        </div>
                                   </div>
                                   <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Send</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
               <Footer></Footer>
          </>
     );
};

export default Contact;