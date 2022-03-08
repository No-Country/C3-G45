import React from "react";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startClearCart, startRemoveItem, startBuy } from "actions/cart";

import FullCart from './FullCart';
import EmptyCard from './EmptyCart';

import "./cart.css";


// This is a functional component wrapping the Cart functionality
// It consists of a Cart component and a CartItem component
// The Cart component is responsible for rendering the CartItem component
// The CartItem is its own component
// We need to map the cartItems state to the CartItem component
// CartItems comes from the global redux state

const Cart = () => {

  const { cart: reduxCart, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = useState(0);

  // React.useEffect(() => {
  //   setCart(reduxCart);
  //   setTotal(reduxCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  // }, [reduxCart]);


  const finishBuy = () => {
    handleBuy();
    alert("Successful purchase");
    handleClearCart();
  };
  const handleBuy = async () => {
    console.log(auth.accessToken)
    let token = auth.accessToken;
    await dispatch(startBuy(token, reduxCart));
    return;
  }
  const handleClearCart = () => {
    dispatch(startClearCart());
  };

  const handleDeleteItem = (e) => {
    const itemId = parseInt(e.target.id);
    dispatch(startRemoveItem(reduxCart.event, itemId));
  };


  return cart.length > 0 ? <FullCart
      cart={reduxCart}
      total={total}
      handleDeleteItem={handleDeleteItem}
      handleClearCart={handleClearCart}
      finishBuy={finishBuy}
    /> : <EmptyCard />;
};

export default Cart;
