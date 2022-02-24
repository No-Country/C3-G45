import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/LogIn/LoginPage";
import ProfilePage from "../components/Profile/ProfilePage";
import PrincipalSection from "../components/principal/PrincipalSection";
import RegisterPage from "../components/Register/RegisterPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PrincipalSection />} />
      <Route path="/home" element={<PrincipalSection />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRouter;
