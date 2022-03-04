// This is a functional component wrapping the Cart functionality
// It consists of a Cart component and a CartItem component
// The Cart component is responsible for rendering the CartItem component
// The CartItem is its own component
// We need to map the cartItems state to the CartItem component
// CartItems comes from the global redux state

import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { startClearCart, startRemoveItem } from '../../actions/cart';
import './cart.css';

const Cart = () => {

  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();

  const finishBuy = () => {
    alert("Successful purchase");
    handleClearCart();
  }

  const handleClearCart = () => {
    dispatch(startClearCart())
  }

  const handleDeleteItem = (e) => {

    const itemId = parseInt(e.target.id);

    dispatch(startRemoveItem(cart.event, itemId));
  }

  if (cart.event === undefined || cart.event.length === 0) {
    return (
      <div className="container cart-section">
        <h1>
          Ups, the cart is empty <i className="fas fa-frown"></i>
        </h1>
        <h4>Visit our shop below</h4>
        <Link className="btn btn-primary mt-5" to="/home" >Store</Link>
      </div>
    )
  }
  return (
    <div className="container cart-section">
      <h1 className="mb-5 mt-5">
        Your shop cart
      </h1>
      {
        cart.event.map(e => {
          return (
            <div key={e.id} className="container card mb-5 p-0">
              <div className="row g-0">
                <div className="col-4 p-2 d-flex alig-items-center justify-content-center body-ticket">
                  <img src="https://res.cloudinary.com/dxjaruq2p/image/upload/v1/media/events/ticket_latam_owsqvf" alt="..." />
                </div>
                <div className="col-8">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-md-6 p-2 body-ticket">
                        <h3>{e.name_event}</h3>
                        <p>
                          <i className="fas fa-globe-americas"></i> {e.city}
                        </p>
                        <p>
                          <i className="fas fa-map-marker-alt"></i> {e.location}
                        </p>
                        <p className="text-muted">
                          <i className="fas fa-calendar-alt"></i> {e.date_event}
                        </p>
                        <p>
                          <i className="fas fa-dollar-sign"></i> Price: USD150
                        </p>
                        
                      </div>
                      <div className="col-xs-12 col-md-6 p-2 d-flex justify-content-center align-items-center">
                        <button className="btn btn-primary fas fa-times" id={e.id} onClick={handleDeleteItem}></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8">
            <p>TOTAL: USD150</p>
          </div>
          <div className="col-md-2">
            <button className=" btn btn-primary" onClick={ finishBuy }>Buy</button>
          </div>
          <div className="col-md-2">
            <button className=" btn btn-primary" onClick={ handleClearCart }>Clear cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
