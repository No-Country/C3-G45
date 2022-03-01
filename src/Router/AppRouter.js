import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../components/LogIn/LoginPage";
import ProfilePage from "../components/User/ProfilePage";
import PrincipalSection from "../components/principal/PrincipalSection";
import RegisterPage from "../components/Register/RegisterPage";
import UpdatePassword from './../components/User/UpdatePassword/UpdatePassword';
import Cart from "../components/Cart/Cart";
import MyPurchases from './../components/User/MyPurchases/MyPurchases';
import MyTickets from './../components/User/MyTickets/MyTickets';
import PrivateRoute from "./PrivateRoute";


const AppRouter = () => {

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PrincipalSection />} />
      <Route path="/home" element={<PrincipalSection />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Private Routes */}
      <Route path="/profile" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/updatePassword" element={<PrivateRoute />}>
        <Route path="/updatePassword" element={<UpdatePassword />} />
      </Route>
      <Route path="/cart" element={<PrivateRoute />}>
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/myPurchases" element={<PrivateRoute />}>
        <Route path="/myPurchases" element={<MyPurchases />} />
      </Route>
      <Route path="/myTickets" element={<PrivateRoute />}>
        <Route path="/myTickets" element={<MyTickets />} />
      </Route>

      <Route path="*" element={ <Navigate to="/home"/> }/>
    </Routes>
  );
};

export default AppRouter;
