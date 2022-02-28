import React from "react";
import { Link } from "react-router-dom";

const LoginNav = () => {

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" id="profile" to="/profile">
          My Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" id="cart" to="/cart">
          Cart
        </Link>
      </li>
    </ul>
  );
};

export default LoginNav;
