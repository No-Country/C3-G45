// This is a functional component wrapping the Cart functionality
// It consists of a Cart component and a CartItem component
// The Cart component is responsible for rendering the CartItem component
// The CartItem is its own component
// We need to map the cartItems state to the CartItem component
// CartItems comes from the global redux state

import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem';

// import { removeFromCart } from '../../actions/cartActions';
const removeFromCart = () => null


const Cart = () => {
  const cartItems = useSelector(state => state.cartItems);
  const total = useSelector(state => state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
  const cartItemsCount = useSelector(state => state.cartItems.sum(item => item.quantity));

  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {
          cartItems.map(item =>
            <CartItem key={item.id} item={item} removeFromCart={removeFromCartHandler} />
          )
        }
      </div>
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="cart-btn">
        <button className="main-btn">GO TO CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;
