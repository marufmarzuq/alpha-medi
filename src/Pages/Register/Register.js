import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import "./Register.css"

const Register = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [name, setName] = useState('');
     const [error, setError] = useState('');
     const { createAccountWithEmailPassword, auth, setUser, updateProfile  } = useAuth();
     const history = useHistory();
     const handleName = (e) => {
          setName(e.target.value)
     }
     const handleEmail = (e) => {
          setEmail(e.target.value)
     }
     const handlePassword = (e) => {
          setPassword(e.target.value)
     }
     const handleRegistration = e => {
          e.preventDefault();
          if (password.length < 6) {
               setError('Password should be at least 6 characters long')
               return
          }
          createAccountWithEmailPassword(auth, email, password)
          .then(result => {
               setUser('');
               setUserName();
               history.push("/login");
          })
          .catch((error) => {
               setError(error.message)
             });
     }
     const setUserName = () => {
          updateProfile(auth.currentUser, {
               displayName: name
          })
          .then((result) => {
          })
     }
     return (
          <>
          <Header></Header>
          <div className="register">
               <div className="container d-flex justify-content-center">
                    <div className="form-container">
                    <form onSubmit={handleRegistration}>
                         <div className="mb-3">
                         <label htmlFor="fullname" className="form-label">Full Name</label>
                         <input onBlur={handleName} type="text" className="form-control" id="fullname" aria-describedby="emailHelp" required/>
                         </div>
                         <div className="mb-3">
                         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                         <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                         </div>
                         <div className="mb-3">
                         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                         <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required/>
                         </div>
                         <p className="text-danger">{ error}</p>
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