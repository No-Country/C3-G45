import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { startClearCart, startRemoveItem, startBuy } from "actions/cart";

import FullCart from "./FullCart";
import EmptyCard from "./EmptyCart";

import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { auth, cart } = useSelector((state) => state);

  const finishBuy = (quantity) => {
    dispatch(startBuy(auth.accessToken, cart, quantity));
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
    };

    cart.event.map((item) => {
      totalPrices.ticketsTotalPrice += parseFloat(item.tickets[0].price);
      //totalPrices.productsTotalPrice += parseFloat(item.products.map( product => product.price));
    });

    return totalPrices;
  };

  return cart?.event?.length > 0 ? (
    <FullCart
      cart={cart}
      total={getTotal()}
      handleDeleteItem={handleDeleteItem}
      handleClearCart={handleClearCart}
      finishBuy={finishBuy}
    />
  ) : (
    <EmptyCard />
  );
};

export default Cart;
