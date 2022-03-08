import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    <div className="container cart-section">
        <h1>
            Ups, the cart is empty <i className="fas fa-frown"></i>
        </h1>
        <h4>Visit our shop below</h4>
        <Link className="btn btn-primary mt-5" to="/home">
            Store
        </Link>
    </div>
}

module.exports = EmptyCart;
