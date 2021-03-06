import React from "react";
import "./styles.scss";

const stringToDate = (string) => {
  return string.slice(0, 10).replace(/-/g, "/");
};
const stringToTime = (string) => {
  return string.slice(11, 16);
};

const EventCard = ({ e, handleAddToCart }) => {
  return (
    <div>
      <article className="postcard dark blue" >
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"
            src={e.image_event}
            alt="Title"
          />
        </a>
        <div className="postcard__text">
          <div className="status-event">
            <p>{e.status_event}</p>
          </div>
          <h1 className="postcard__title blue">
            <a href="#">{e.name_event}</a>
          </h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt"></i>
              {stringToDate(e.date_event)}
            </time>
            <div>
              <i className="fas fa-clock"></i>
              {stringToTime(e.date_event)}
            </div>
            <div>
              <i className="fas fa-map-marker"></i>
              {e.city} - {e.location}
            </div>
            <div>
              <i className="fas fa-dollar-sign"></i>
              USD {e.tickets[0].price}
            </div>
          </div>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">{e.description}</div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <button
                className="btn btn-primary btn-buy"
                id={e.id}
                onClick={handleAddToCart}
              >
                Add to Cart<i className="fa fa-shopping-cart"></i>
              </button>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};
export default EventCard;
