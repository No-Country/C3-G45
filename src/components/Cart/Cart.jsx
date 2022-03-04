import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startRemoveItem } from '../../actions/cart';
import './cart.css';
// This is a functional component wrapping the Cart functionality
// It consists of a Cart component and a CartItem component
// The Cart component is responsible for rendering the CartItem component
// The CartItem is its own component
// We need to map the cartItems state to the CartItem component
// CartItems comes from the global redux state



const Cart = () => {

  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();

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
                        <p>{e.city}</p>
                        <p>{e.location}</p>
                        <p className="text-muted">{e.date_event}</p>
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
    </div>
  )
}

export default Cart;
