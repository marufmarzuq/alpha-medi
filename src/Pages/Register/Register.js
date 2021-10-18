import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Register = () => {
     return (
          <>
          <Header></Header>
          <div className="login">
               <div className="container d-flex justify-content-center">
                    <div className="form-container">
                    <form>
                         <div className="mb-3">
                         <label htmlFor="fullname" className="form-label">Full Name</label>
                         <input type="text" className="form-control" id="fullname" aria-describedby="emailHelp"/>
                         </div>
                         <div className="mb-3">
                         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                         </div>
                         <div className="mb-3">
                         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                         <input type="password" className="form-control" id="exampleInputPassword1"/>
                         </div>
                         <button type="submit" className="btn btn-dark">Register</button>
                         </form>
                         <hr />
                         <p className="pt-4">Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
               </div>
          </div>
          <Footer></Footer>
     </>
     );
};

export default Register;