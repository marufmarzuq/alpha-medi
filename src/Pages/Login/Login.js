import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import "./Login.css"
const Login = () => {
     return (
          <>
               <Header></Header>
               <div className="login">
                    <div className="container d-flex justify-content-center">
                         <div className="form-container">
                         <form>
                              <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                              </div>
                              <div className="mb-3">
                              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1"/>
                              </div>
                              <button type="submit" className="btn btn-dark">Log in</button>
                              </form>
                              <hr />
                              <p className="text-center">or</p>
                              <button type="submit" className="btn btn-outline-dark w-100">Log in with Gmail</button>
                              <p className="pt-4">Don’t have an account yet? <Link to="/register">register</Link></p>
                         </div>
                    </div>
               </div>
               <Footer></Footer>
          </>
     );
};

export default Login;