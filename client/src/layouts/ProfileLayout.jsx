import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";
import BackButton from "../components/BackButton/BackButton"; // Fixed import path
import Footer from "../components/Footer/Footer";

const ProfileLayout = () => {
  // Navigate to home page function
  const navigateToHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Navbar variant="profile" />
      <div
        style={{
          position: "fixed",
          top: "100px",
          left: "30px",
          zIndex: 9999,
        }}
      >
        <BackButton arrowColor="black" />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ProfileLayout;
