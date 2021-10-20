import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import "./Login.css"

const Login = () => {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [error, setError] = useState('');
     const {signInUsingGoogle,
          setUser,
          loginWithEmailPassword,
          setIsLoading,
          auth } = useAuth();
     const location = useLocation();
     const history = useHistory();
     const redirectURI = location.state?.from || '/'
     const handleGoogleLogin = () => {
          setIsLoading(true)
          signInUsingGoogle()
          .then(result => {
               setUser(result.user);
               history.push(redirectURI);
          })
          .catch(error => {
          setError(error.message)
          })
          .finally(()=> setIsLoading(false))
     }

     const handleEmail = (e) => {
          setEmail(e.target.value)
     }
     const handlePassword = (e) => {
          setPassword(e.target.value)
     }
     const handlePasswordLogin = (e) => {
          e.preventDefault();
          setIsLoading(true)
          loginWithEmailPassword(auth, email, password)
          .then(result => {
               const user = result.user;
               setUser(user);
               history.push(redirectURI);
               setError("")
          })
          .catch((error) => {
               setError(error.message)
          })
          .finally(()=> setIsLoading(false))
     }
     return (
          <>
               <Header></Header>
               <div className="login">
                    <div className="container d-flex justify-content-center">
                         <div className="form-container">
                         <form onSubmit={handlePasswordLogin}>
                              <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                              <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                              </div>
                              <div className="mb-3">
                              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                              <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
                              </div>
                              <p className="text-danger">{ error}</p>
                              <button type="submit" className="btn btn-dark">Log in</button>
                              </form>
                              <hr />
                              <p className="text-center">or</p>
                              <button type="submit" className="btn btn-outline-dark w-100" onClick={handleGoogleLogin}>Log in with Gmail</button>
                              <p className="pt-4">Don’t have an account yet? <Link to="/register">register</Link></p>
                         </div>
                    </div>
               </div>
               <Footer></Footer>
          </>
     );
};

export default Login;