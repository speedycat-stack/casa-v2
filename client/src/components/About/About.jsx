import React from "react";
import "./About.css";
import allOne from "../../assets/allOne.png"; 

const About = () => {
  return (
    <section className="about-section">
      <div className="stats-container">
        <div className="stat-card tilted-light-left">
          <h3>VISITEURS</h3>
          <p className="counter">500</p>
          <div className="card-line"></div>
        </div>
        <div className="stat-card white-card">
          <h3>DONATEURS</h3>
          <p className="counter">100</p>
          <div className="card-line"></div>
        </div>
        <div className="stat-card tilted-light-right">
          <h3>CASATIENS</h3>
          <p className="counter">800</p>
          <div className="card-line"></div>
        </div>
        <div className="stat-card white-card">
          <h3>ACTIONS</h3>
          <p className="counter">20</p>
          <div className="card-line"></div>
        </div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h2>About</h2>
          <p>
            CASA est une entreprise sociale tunisienne fondée en 2023 par des jeunes entrepreneurs.
            Son but principal est de créer des solutions pour les sans domicile fixe (SDFs) à travers
            une plateforme innovante. Cette initiative vise à offrir des services essentiels et à
            améliorer la qualité de vie des personnes en situation de précarité. CASA se distingue
            par son engagement social et sa volonté de trouver des solutions durables aux défis liés
            à l'hébergement et à l'insertion des SDFs.
          </p>
        </div>
        <div className="about-image-container">
          <div className="about-image">
            <img src={allOne} alt="We All One" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;