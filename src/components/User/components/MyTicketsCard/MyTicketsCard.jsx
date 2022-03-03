import React from "react";
import "./styles.scss";

const stringToDate = (string) => {
  return string.slice(0, 10).replace(/-/g, "/");
};
const stringToTime = (string) => {
  return string.slice(11, 16);
};
const MyTicketsCard2 = ({ item }) => {
  return (
    <div>
      {/*}
            <div className="col-6">
              <h3>NAMEEEEE2: {item.name_event}</h3>
              <p>Description: {item.description}</p>
              <p>Status: {item.status_event}</p>
              <p>Date Event: {item.date_event}</p>
              <p>City: {item.city}</p>
              <p>Location: {item.location}</p>
              <img src={item.get_image} alt="" />
            </div>
            <div className="col-6 ticketImg"></div>
  </div>*/}

      <article className="postcard dark blue">
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"
            src="https://dynamicmedia.livenationinternational.com/Media/d/q/t/e7e378ed-7f05-4c67-8f44-b08c8aa72ca9.jpg"
            alt="Image Title"
          />
        </a>
        <div className="postcard__text">
          <div className="status-event">
            <p>{item.status_event}</p>
          </div>
          <h1 className="postcard__title blue"><a href="#">{item.name_event}</a>
          </h1>
          <div className="postcard__subtitle small">
            <time datetime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt"></i>{stringToDate(item.date_event)}
            </time>
            <div>
              <i className="fas fa-clock"></i>{stringToTime(item.date_event)}
            </div>
            <div>
              <i className="fas fa-map-marker"></i>{item.city} - {item.location} 
            </div>
          </div>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">{item.description}</div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <button className="btn btn-primary">
                <i className="fas fa-file-download"></i>Print
              </button>
            </li>
            <li className="tag__item">
              <button className="btn btn-primary">
                <i className="fas fa-gift"></i>Products
              </button>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};
export default MyTicketsCard2;
