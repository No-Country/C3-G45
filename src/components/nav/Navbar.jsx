import logo from '../../assets/img/logo.svg';
import './nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from './UserNav';
import LoginNav from './LoginNav';
import { store } from '../../store/store';

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
          {
            store.getState().session ?<LoginNav /> :<UserNav />
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;