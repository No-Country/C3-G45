import React from "react";
//import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { startAddToCart } from "actions/cart";
import { isInCart } from "helpers/isInCart";
import MerchCard from "components/MerchCard/MerchCard";
// import miniature from "assets/img/dua-lipa-miniature.jpg";

const MerchsCards = () => {
  const { data, auth, cart } = useSelector((state) => state);
  console.log(data)
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const handleAddToCart = (m) => {
    const node = Number(m.target.id);
    //const event = data.events.data.find((event) => event.id === node);
    //const merch = data.events.data.find((event) => event.products.filter((prod) => prod.id === node))
    //const merch = data.events.data.forEach((event) => event.products)
    // console.log(merch)
    // let currentCart = [];

    // if (cart.merch === undefined) {
    //   currentCart.push(merch);
    // } else {
    //   currentCart = [...cart.merch, merch];
    // }

    if (auth.session === false || auth.session === undefined) {
      navigate("/login");
    } else {
      if (isInCart(cart.merch, node)) {
        return console.log("Wont add existing item to cart");
      }
      //dispatch(startAddToCart(currentCart, node));
    }
  };

  if (data.events.data === undefined) {
    return <div>Loading....</div>;
  }
  return (
    <div className="container container-tickets mt-5">
      <div className="row">
        <div className="col">
          <div className="row row-cols-1 ">
            {data.events.data.map((e) => e.products.map((m) => {
              return (<MerchCard key={m.id} m={m} handleAddToCart={handleAddToCart} />);
            })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchsCards;
