import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startAddToCart } from "actions/cart";
import { isInCart } from "helpers/isInCart";
import EventCard from "components/EventCard/EventCard";
// import miniature from "assets/img/dua-lipa-miniature.jpg";

const TicketsCards = () => {
  const { data, auth, cart } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    const node = Number(e.target.id);
    const event = data.events.data.find((event) => event.id === node);
    console.log(event)
    let currentCart = [];

    if (cart.event === undefined) {
      currentCart.push(event);
    } else {
      currentCart = [...cart.event, event];
    }

    if (auth.session === false || auth.session === undefined) {
      navigate("/login");
    } else {
      if (isInCart(cart.event, node)) {
        return console.log("Wont add existing item to cart");
      }
      dispatch(startAddToCart(currentCart, node));
    }
  };

  if (data.events === undefined) {
    return <div>Loading....</div>;
  }
  return (
    <div className="container container-tickets mt-5">
      <div className="row">
        <div className="col">
          <div className="row row-cols-1 ">
            {data.events.data.map((e) => {
              return <EventCard key={e.id} e={e} handleAddToCart={handleAddToCart} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsCards;
