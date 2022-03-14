import React, { useState } from "react";
import TicketsCards from "components/TicketsCards/TicketsCards";
import MerchsCards from "components/MerchsCards/MerchsCards";

const MerchandisingSection = () => {
  const [showMerch, setShowMerch] = useState(false)
  return (
    <div className="container mt-5 mb-5 container-tickets">
      <div className="row mt-5">
        <div className="col-12 filter-container">
          <h1>AVAILABLE EVENTS AND MERCHANDISING</h1>
          <div className="input-group mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="July 24, Toronto, Canada, 60USD"
              aria-label="search"
            />
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
          <label className="form-label mt-4">Price Range</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="0.5"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="btn-toolbar mt-4" role="group" aria-label="Events">
            <button type="button" className="btn-merch btn btn-primary btn-lg" onClick={() => setShowMerch(true)}
            >
              New Products!
            </button>
            <button type="button" className="btn-merch btn btn-primary btn-lg" onClick={() => setShowMerch(false)}
            >
              New Events!
            </button>
          </div>
        </div>
      </div>
      <div className="container container-tickets mt-5">
        <div className="row">
          <div className="col">
            <div className="row row-cols-1 ">
              {showMerch ? <MerchsCards /> : <TicketsCards />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchandisingSection;
