import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { startClearCart, startRemoveItem, startBuy } from "actions/cart";

import FullCart from './FullCart';
import EmptyCard from './EmptyCart';

import "./cart.css";


const Cart = () => {

  const dispatch = useDispatch();
  const { cart, auth } = useSelector((state) => state);
  const { ...state } = useSelector((state) => state);
  console.log(state)

  const finishBuy = () => {
    handleBuy();
    alert("Successful purchase");
    handleClearCart();
  };

  const handleBuy = () => {
    let token = auth.accessToken;
    dispatch(startBuy(token, cart));
  }

  const handleClearCart = () => {
    dispatch(startClearCart());
  };

  const handleDeleteItem = (e) => {
    const itemId = parseInt(e.target.id);
    dispatch(startRemoveItem(cart.event, itemId));
  };

  const getTotal = () => {
    let total = 0;
    // We need to find, recursively inside cart.data, everything that has a property named "price", and then we need to sum all of them.
    cart.event.forEach((item) => {
      // caso base: encuentro propiedad llamada price:
      if (item?.price) { total += item.price; }
      else {
        // caso recursivo: reviso si es un array o un objeto, y si es un array, uso un .forEach para recorrerlo; si es un objeto, uso Object.keys para recorrerlo:
        if (Array.isArray(item)) {
          item?.forEach((i) => {
            if (i.price) { total += i.price; }
          });
        }
        else if (typeof item === "object") {
          Object.keys(item).forEach((i) => {
            if (item[i]?.price) { total += item[i].price; }
          });
        }
      }
    });
    console.log(total)
    return total;
  };

  return cart?.event?.length > 0 ? <FullCart
    cart={cart}
    total={getTotal()}
    handleDeleteItem={handleDeleteItem}
    handleClearCart={handleClearCart}
    finishBuy={finishBuy}
  /> : <EmptyCard />;
};

export default Cart;
