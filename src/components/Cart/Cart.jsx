import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { startClearCart, startRemoveItem, startBuy } from "actions/cart";

import FullCart from './FullCart';
import EmptyCard from './EmptyCart';

import "./cart.css";


const Cart = () => {

  const dispatch = useDispatch();
  const { auth, cart, data } = useSelector((state) => state);
  
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

  const getTotal = () => {

    const totalPrices = {
      ticketsTotalPrice: 0,
      //productsTotalPrice: 0
    }

    cart.event.map((item) => {
      totalPrices.ticketsTotalPrice += parseFloat(item.tickets[0].price);
      //totalPrices.productsTotalPrice += parseFloat(item.products.map( product => product.price));
    })

    return totalPrices;
  };

  const getTotalForGodsSake = () => {
    /* 
    price is in: 
    cart.event.map( e => e.products.map( product => product.price))
    or in:
    data.event.data.products.map( product => product.price)
     */
    const cartPrices = cart?.event?.map( e => e.products.map( product => parseFloat(product.price)))
    const totalCartPrices = cartPrices?.reduce((acc, curr) => acc + curr, 0);
    const eventPrices = data?.event?.data?.products?.map( product => parseFloat(product.price));
    const totalEventPrices = eventPrices?.reduce((acc, curr) => acc + curr, 0);

    return totalCartPrices || 0 + totalEventPrices || 0;
  }

  return cart?.event?.length > 0 ?
    <FullCart
      cart={cart}
      total={getTotal()}
      handleDeleteItem={handleDeleteItem}
      handleClearCart={handleClearCart}
      finishBuy={finishBuy}
    /> : <EmptyCard />;
};

export default Cart;
