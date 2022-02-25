import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/LogIn/LoginPage";
import ProfilePage from "../components/Profile/ProfilePage";
import PrincipalSection from "../components/principal/PrincipalSection";
import RegisterPage from "../components/Register/RegisterPage";
import UpdatePassword from './../components/Profile/UpdatePassword/UpdatePassword';
import Cart from "../components/Cart/Cart";
import MyPurchases from './../components/Profile/MyPurchases/MyPurchases';
import MyTickets from './../components/Profile/MyTickets/MyTickets';


const AppRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<PrincipalSection />} />
      <Route path="/home" element={<PrincipalSection />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/updatePassword" element={<UpdatePassword />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/myPurchases" element={<MyPurchases />} />
      <Route path="/myTickets" element={<MyTickets />} />
    </Routes>
  );
};

export default AppRouter;
