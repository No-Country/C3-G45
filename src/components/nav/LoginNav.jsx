import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";

const LoginNav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" id="ingresar" to="/profile">
          Mi perfil
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" id="registrar" to="/carrito">
          Carrito
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          id="registrar"
          to="/home"
          onClick={handleLogout}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
};

export default LoginNav;
