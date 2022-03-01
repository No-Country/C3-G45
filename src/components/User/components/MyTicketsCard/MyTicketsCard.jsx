import React from "react";
import "./styles.css";
const MyTicketsCard = ({ item }) => {
  return (
    <div className="container ticketContainer">
      <div className="row">
        <div className="container ticketUser">
          <div className="row ">
            <div className="col-6">
              <h3>Name: {item.name_event}</h3>
              <p>Description: {item.description}</p>
              <p>Status: {item.status_event}</p>
              <p>Date Event: {item.date_event}</p>
              <p>City: {item.city}</p>
              <p>Location: {item.location}</p>
              <img src={item.get_image} alt="" />
            </div>
            <div className="col-6 ticketImg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyTicketsCard;
