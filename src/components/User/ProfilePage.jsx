import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { useSelector } from "react-redux";
import BtnProfile from "./components/BtnProfile/BtnProfile";

const ProfilePage = () => {
  const state = useSelector((state) => state);

  console.log(state.auth.name);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className="container profile-container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="profile-h1">My Account</h1>
        </div>

        <div className="col-12 text-center">
          <i className="fas fa-user-circle icon-profile-user fa-10x" ></i>
          <p>{state.auth.name}</p>
        </div>

        <div className="col-12 card-container">
          <BtnProfile title="Change password"
            iconClassNames="fas fa-user-lock icon-profile"
            linkTo="/updatePassword" className="onHover" />
          <BtnProfile title="Purchases"
            iconClassNames="fas fa-shopping-bag icon-profile"
            linkTo="/myPurchases" className="onHover" />
          <BtnProfile title="Tickets"
            iconClassNames="fas fa-ticket-alt icon-profile"
            linkTo="/myTickets" className="onHover" />
          <BtnProfile title="Logout"
            iconClassNames="fas fa-sign-out-alt icon-profile"
            linkTo="/home" className="onHover" click={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;