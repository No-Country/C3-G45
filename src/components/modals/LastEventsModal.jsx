import React from "react";
import TicketsCards from "../TicketsCards/TicketsCards";

import "./modals.css";

const LastEventsModal = () => {
  return (
    <div
      className="modal fade"
      id="lastEvents"
      tabIndex="-1"
      aria-labelledby="lastEventsLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="lastEventsLabel">
              Last Events
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <TicketsCards />
            <TicketsCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastEventsModal;
