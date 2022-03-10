import React from "react";
import { useForm } from "hooks/useForm";

const FullCart = ({
  cart,
  total,
  handleDeleteItem,
  handleClearCart,
  finishBuy,
}) => {
  const [formValues, handleInputChange] = useForm();

  const { quantity } = formValues;

  const stringToDate = (string) => {
    return string.slice(0, 10).replace(/-/g, "/");
  };
  const stringToTime = (string) => {
    return string.slice(11, 16);
  };

  console.log(total)

  return (
    <div className="container cart-section">
      <h1 className="mb-5 mt-5">Your shop cart</h1>
      {cart?.event?.map((e) => {
        return (
          <div key={e.id} className="container card mb-5 p-0">
            <div className="row g-0">
              <div className="col-md-4 col-sm-12 p-2 d-flex alig-items-center justify-content-center body-ticket">
                <img
                  src="https://res.cloudinary.com/dxjaruq2p/image/upload/v1/media/events/ticket_latam_owsqvf"
                  alt="..."
                />
              </div>
              <div className="col-md-8 col-sm-12">
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
                        <i className="fas fa-calendar-alt"></i>{" "}
                        {stringToDate(e.date_event)} -{" "}
                        <i className="fas fa-clock"></i>{" "}
                        {stringToTime(e.date_event)}
                      </p>
                      <p>
                        <i className="fas fa-dollar-sign"></i> Price: USD
                        {e.tickets[0].price}
                      </p>
                    </div>
                    <div className="col-xs-12 col-md-3 p-2 d-flex justify-content-center align-items-center">
                      <input
                        type="number"
                        name="quantity"
                        placeholder={1}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-xs-12 col-md-3 p-2 d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-primary fas fa-times"
                        id={e.id}
                        onClick={handleDeleteItem}
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8">
            <p>TOTAL: USD{total.ticketsTotalPrice}</p>
          </div>
          <div className="col-md-2">
            <button
              className=" btn btn-primary"
              onClick={() => finishBuy(quantity)}
            >
              Buy
            </button>
          </div>
          <div className="col-md-2">
            <button className=" btn btn-primary" onClick={handleClearCart}>
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCart;
