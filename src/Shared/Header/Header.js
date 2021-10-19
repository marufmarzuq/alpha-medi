import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
     const { user, logOut } = useAuth();
     return (
          <header>
              <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <div className="container">
                  <Link className="navbar-brand" to="/"><img className="app-logo" src={logo} alt="" /></Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about-us">About Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/faq">FAQ</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                      </li>
                        <li>
                            <span className="user-name">{ user?.displayName }</span>
                            {user?.email ? <Link to="/" className="btn-link" onClick={logOut}>Log out</Link> : <Link to="/login" className="btn-link">Login</Link>}
                      </li>
                  </ul>
                  </div>
                </div>
              </nav>
          </header>
     );
};

export default Header;