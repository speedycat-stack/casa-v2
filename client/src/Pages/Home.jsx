import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Mission from "../components/Mission/Mission";
import Goals from "../components/Goals/Goals";
import Partners from "../components/Partners/Partners";
import bgIndex from "../assets/sdf.png";

const Home = () => {
  // Check if we're returning from products page and refresh if needed
  useEffect(() => {
    // Check if we previously visited the products page
    if (sessionStorage.getItem("visitedProducts") === "true") {
      // Clear the flag
      sessionStorage.removeItem("visitedProducts");
      // Refresh the page
      window.location.reload();
    }
  }, []);

  return (
    <>
      <Header variant="light" bgImage={bgIndex} showHero={true} />
      <About />
      <Mission />
      <Goals />
      <Partners />
    </>
  );
};

export default Home;
