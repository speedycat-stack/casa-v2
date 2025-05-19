
import React from "react";
import "./Mission.css";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

const Mission = () => {
  return (
    <section className="mission-section">
      <h1>Our SDG Mission</h1>
      <div className="sdg-container">
        <div className="sdg-card">
          <img src={card1} alt="No Poverty" />
        </div>
        <div className="sdg-card">
          <img src={card2} alt="Zero Hunger" />
        </div>
        <div className="sdg-card">
          <img src={card3} alt="Good Health and Well-Being" />
        </div>
      </div>
    </section>
  );
};

export default Mission;