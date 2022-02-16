import logo from '../../assets/img/logo.svg';
import './nav.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" id='home' href="#home">
          <img src={logo} className="nav-logo" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" id='ingresar' href="#signIn">Sign in</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='registrar' href="#SignuP">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;