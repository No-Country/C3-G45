import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { startClearCart, startRemoveItem, startBuy } from "actions/cart";

import FullCart from './FullCart';
import EmptyCard from './EmptyCart';

import "./cart.css";


const Cart = () => {

  const dispatch = useDispatch();
  const { cart, auth } = useSelector((state) => state);
  
  console.log(cart)

  const finishBuy = () => {
    dispatch(startBuy(auth.accessToken, cart));
    alert("Successful purchase");
    handleClearCart();
  };
  
  const handleClearCart = () => {
    dispatch(startClearCart());
  };

  const handleDeleteItem = (e) => {
    const itemId = parseInt(e.target.id);
    dispatch(startRemoveItem(cart.event, itemId));
  };


  return cart?.event?.length > 0 ? <FullCart
    cart={cart}
    // total={total}
    handleDeleteItem={handleDeleteItem}
    handleClearCart={handleClearCart}
    finishBuy={finishBuy}
  /> : <EmptyCard />;
};

export default Cart;
