import React from 'react';
import { Link } from 'react-router-dom';

const LoginNav = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" id='ingresar' to="/login">Mi perfil</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" id='registrar' to="/carrito">Carrito</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" id='registrar' to="/logout">Logout</Link>
            </li>
        </ul>
    );
}

export default LoginNav;