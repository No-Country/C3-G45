import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startAddToCart } from "../../actions/cart";
import { isInCart } from "../../helpers/isInCart";
import EventCard from "../EventCard/EventCard";
// import miniature from "../../assets/img/dua-lipa-miniature.jpg";

const TicketsCards = () => {
  const { data, auth, cart } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    const node = Number(e.target.id);
    const event = data.events.data.find((event) => event.id === node);
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
              return <EventCard e={e} handleAddToCart={handleAddToCart} />;
              /* 
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
                                                        </div>
                                                        <div className="col-xs-12 col-md-6 p-2 d-flex justify-content-center align-items-center">
                                                            <button className="btn btn-primary" id={e.id} onClick={ handleAddToCart }>
                                                                Buy ticket
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>*/
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsCards;
