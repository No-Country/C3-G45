import logo from '../../assets/img/logo.svg';
import './nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" id='home' to="/home">
          <img src={logo} className="nav-logo" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" id='ingresar' to="/login">Sign in</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id='registrar' to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;