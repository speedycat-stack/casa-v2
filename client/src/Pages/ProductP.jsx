import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Product from "../components/Products/Product";
import bgProduct from "../assets/sleep.png";

// Inline ReturnButton component
const ReturnButton = ({ navigateHome }) => {
  return (
    <div
      onClick={navigateHome}
      style={{
        position: "fixed",
        top: "100px",
        left: "50px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#7FB5FF",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
        zIndex: 9999999,
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        animation: "fadeIn 0.5s ease-out",
      }}
    >
      ←
    </div>
  );
};

// Add a global style for the animation
const addGlobalStyle = () => {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(styleElement);
  return () => {
    document.head.removeChild(styleElement);
  };
};

const ProductP = () => {
  // Get the navigate function from React Router
  const navigate = useNavigate();

  // Custom navigation handler for the home page
  const navigateToHome = () => {
    // Replace the current history entry with the home URL
    window.location.href = "/";
  };

  // Adding the navigate function to the window for use in child components
  useEffect(() => {
    window.navigateToHome = navigateToHome;

    // Add the animation style
    const removeStyle = addGlobalStyle();

    // Clean up function
    return () => {
      delete window.navigateToHome;
      removeStyle();
    };
  }, []);

  return (
    <>
      <Header
        variant="Light"
        bgImage={bgProduct}
        showHero={true}
        customTitle="PRODUCT"
      />

      {/* Return button rendered at the root level */}
      <ReturnButton navigateHome={navigateToHome} />

      <Product />
    </>
  );
};

export default ProductP;
