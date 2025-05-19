import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import BackButton from "../components/BackButton/BackButton"; // Fixed import path

const DonationLayout = () => {
  // Navigate to home page function
  const navigateToHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Navbar variant="donation" />
      <div
        style={{
          position: "fixed",
          top: "100px",
          left: "30px",
          zIndex: 9999,
        }}
      >
        <BackButton />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DonationLayout;
