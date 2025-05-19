import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BackButton from "../components/BackButton/BackButton";
import logo from "../assets/C-bleu.png"; // Import blue logo for white navbar

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isCartPage = location.pathname === "/cart";
  const isMapPage =
    location.pathname === "/map" || location.pathname.includes("/map");

  // Pages that need white navbar
  const needsWhiteNavbar = isCartPage || isMapPage;

  // Return to home page
  const navigateToHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      {needsWhiteNavbar ? (
        <div
          className="white-navbar-container"
          style={{
            backgroundColor: "white",
            position: "fixed",
            width: "100%",
            zIndex: 1000,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <Navbar linkColor="#333" logoSrc={logo} />
        </div>
      ) : (
        <Navbar />
      )}
      <main style={needsWhiteNavbar ? { paddingTop: "80px" } : {}}>
        {/* Display BackButton on all pages except Home */}
        {!isHomePage && (
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
        )}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
