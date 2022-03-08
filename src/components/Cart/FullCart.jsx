import React from 'react'

const FullCart = ({cart, total, handleDeleteItem, handleClearCart, finishBuy}) => {

  return (
   <div className="container cart-section">
      <h1 className="mb-5 mt-5">Your shop cart</h1>
      {cart?.event?.map((e) => {
        return (
          <div key={e.id} className="container card mb-5 p-0">
            {/* <div className="row g-0">
              <div className="col-4 p-2 d-flex alig-items-center justify-content-center body-ticket">
                <img
                  src="https://res.cloudinary.com/dxjaruq2p/image/upload/v1/media/events/ticket_latam_owsqvf"
                  alt="..."
                />
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
                      <p>
                        <i className="fas fa-dollar-sign"></i> Price: USD150
                      </p>
                    </div>
                    <div className="col-xs-12 col-md-6 p-2 d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-primary fas fa-times"
                        id={e.id}
                        onClick={handleDeleteItem}
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
            <p>TOTAL: USD150</p>
          </div>
          <div className="col-md-2">
            <button className=" btn btn-primary" onClick={finishBuy}>
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
  )
}

export default FullCart
