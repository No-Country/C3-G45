import React from "react";
import "./styles.css";
const MerchCard = ({ m, handleAddToCart }) => {
  const percentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
  }
  return (
    <>
      <div className="product-card holo">
        <div className="badge">Stock: {m.stock}unit.</div>
        <div className="product-tumb">
          <img src={m.image} alt="product" />
        </div>
        <div className="product-details">
          <h4><p href="#">{m.name_product}</p></h4>
          <p>{m.description}</p>
          <div className="product-bottom-details">
            <div className="product-price"><small>{(percentage(3, m.price)).toFixed(2)}</small>{m.price}</div>
            <div className="product-links">
              <button
                className="btn btn-primary btn-buy"
                id={m.id}
                onClick={handleAddToCart}
              >
                Add to Cart<i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default MerchCard;
