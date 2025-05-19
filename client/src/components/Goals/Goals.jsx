import React from "react";
import "./Goals.css";
import goal1 from "../../assets/child_sdf.png";
import goal2 from "../../assets/apple.png";
import goal3 from "../../assets/solidaire.png";

const Goals = () => {
  return (
    <section className="goals-section">
      <h2 className="goals-title">Our Goals</h2>
      <p className="goals-description">
        Our product line <span className="highlight">starts with nutritious food</span>—make a difference today by
        <span className="highlight"> purchasing essentials</span> that directly support those in need.
      </p>
      <div className="goals-container">
        <div className="goal-card no-poverty-card">
          <div className="goal-label no-poverty-label">NO POVERTY</div>
          <h3 className="no-poverty-heading">Eradicating Poverty: A Step Towards Sustainable Development</h3>
          <img src={goal1} alt="Goal 1" className="no-poverty-image-bottom" />
        </div>
        <div className="goal-card good-health-card">
          <div className="goal-label good-health-label">GOOD HEALTH</div>
          <h3 className="good-health-heading">Ensuring Good Health and Well-being for All</h3>
          <img src={goal2} alt="Goal 2" className="good-health-image-bottom" />
        </div>
        <div className="goal-card well-being-card">
          <div className="goal-label well-being-label">WELL-BEING</div>
          <h3 className="well-being-heading">Promoting Well-being and Quality of Life for Everyone</h3>
          <img src={goal3} alt="Goal 3" className="well-being-image-full-wide" />
        </div>
      </div>
    </section>
  );
};

export default Goals;
