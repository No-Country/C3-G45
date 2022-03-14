import React from "react";
import TicketsCards from "components/TicketsCards/TicketsCards";

import "./modals.css";

const NewEvents = () => {
  return (
    <div
      className="modal fade"
      id="newEvents"
      tabIndex="-1"
      aria-labelledby="newEventsLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="newEventsLabel">
              New Events
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEvents;
