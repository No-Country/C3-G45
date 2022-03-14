import React from "react";
import "./styles.css";
const MyProductsCard = ({ item }) => {
  return (
    // <div className="container ticketContainer">
    //   <div className="row">
    //     <div className="container ticketUser">
    //       <div className="row ">
    //         <div className="col-6">
    //           <h3>Name: {item.name_event}</h3>
    //           <p>Description: {item.description}</p>
    //           <p>Status: {item.status_event}</p>
    //           <p>Date Event: {item.date_event}</p>
    //           <p>City: {item.city}</p>
    //           <p>Location: {item.location}</p>
    //           <img src={item.get_image} alt="" />
    //         </div>
    //         <div className="col-6 ticketImg"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="product-card holo">
        <div className="badge">Purchased</div>
        <div className="product-tumb">
          <img src="https://i.imgur.com/xdbHo4E.png" alt="product" />
        </div>
        <div className="product-details">
          <span className="product-catagory">Women,bag</span>
          <h4><p href="#">Women leather bag</p></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
          <div className="product-bottom-details">
            <div className="product-price"><small>$96.00</small>$230.99</div>
            <div className="product-links">
              <a href="#">Add to cart <i className="fa fa-shopping-cart"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default MyProductsCard;
