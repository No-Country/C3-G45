import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoginNav = () => {

  const { cart } = useSelector(state => state);
  let contCart;

  if(cart.event === undefined){
    contCart = 0;
  }else{
    contCart = cart.event.length
  }

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" id="profile" to="/profile">
          My Account
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link fas fa-shopping-cart" id="cart" to="/cart"> ({ contCart })</Link>
      </li>
    </ul>
  );
};

export default LoginNav;
