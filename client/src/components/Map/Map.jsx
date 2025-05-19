import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Map.css";
import Nabeul from "../../assets/nabeul.png";
import manouba from "../../assets/manouba.png";
import Sousse from "../../assets/sousse.png";
import Sfax from "../../assets/sfax.png";
import Gabes from "../../assets/gabes.png";
import Beja from "../../assets/beja.png";
import Bizerte from "../../assets/bizerte.png";
import Gafsa from "../../assets/gafsa.png";
import Jendouba from "../../assets/jendouba.png";
import Kairouan from "../../assets/kairouan.png";
import Kasserine from "../../assets/kasserine.png";
import Kebili from "../../assets/kebili.png";
import Kef from "../../assets/kef.png";
import Mahdia from "../../assets/mahdia.png";
import Medenine from "../../assets/medenine.png";
import Monastir from "../../assets/monastir.png";
import SidiBouzid from "../../assets/sidibouzid.png";
import Siliana from "../../assets/siliana.png";
import Tataouine from "../../assets/tataouine.png";
import Tozeur from "../../assets/tozeur.png";
import Zaghouan from "../../assets/zaghouan.png";
import benArous from "../../assets/benArous.png";
import tunis from "../../assets/tunis.png";
import ariana from "../../assets/ariana.png";

// Region data with additional information for popups
const regions = [
  {
    name: "Jendouba",
    img: Jendouba,
    style: { left: "15.44%", top: "4.16%" },
    state: "Stable State",
    peopleCount: 250,
  },
  {
    name: "Kef",
    img: Kef,
    style: { left: "16%", top: "14.4%" },
    state: "Average State",
    peopleCount: 180,
  },
  {
    name: "Kasserine",
    img: Kasserine,
    style: { left: "16%", top: "26.5%" },
    state: "Dangerous State",
    peopleCount: 350,
  },
  {
    name: "Gafsa",
    img: Gafsa,
    style: { left: "14.70%", top: "44.5%" },
    state: "Average State",
    peopleCount: 210,
  },
  {
    name: "Tozeur",
    img: Tozeur,
    style: { left: "11%", top: "48.8%" },
    state: "Stable State",
    peopleCount: 120,
  },
  {
    name: "Kebili",
    img: Kebili,
    style: { left: "12.6%", top: "54.5%" },
    state: "Average State",
    peopleCount: 150,
  },
  {
    name: "Tataouine",
    img: Tataouine,
    style: { left: "16.9%", top: "71%" },
    state: "Dangerous State",
    peopleCount: 280,
  },
  {
    name: "Medenine",
    img: Medenine,
    style: { left: "26.3%", top: "60%" },
    state: "Average State",
    peopleCount: 200,
  },
  {
    name: "Gabès",
    img: Gabes,
    style: { left: "23.2%", top: "52.7%" },
    state: "Average State",
    peopleCount: 220,
  },
  {
    name: "Sfax",
    img: Sfax,
    style: { left: "26.3%", top: "35.99%" },
    state: "Stable State",
    peopleCount: 170,
  },
  {
    name: "Mahdia",
    img: Mahdia,
    style: { left: "29.8%", top: "30.1%" },
    state: "Average State",
    peopleCount: 190,
  },
  {
    name: "Monastir",
    img: Monastir,
    style: { left: "32%", top: "26.3%" },
    state: "Stable State",
    peopleCount: 150,
  },
  {
    name: "Sousse",
    img: Sousse,
    style: { left: "29.7%", top: "15.7%" },
    state: "Average State",
    peopleCount: 230,
  },
  {
    name: "Zaghouan",
    img: Zaghouan,
    style: { left: "25.68%", top: "10.8%" },
    state: "Average State",
    peopleCount: 140,
  },
  {
    name: "Kairouan",
    img: Kairouan,
    style: { left: "23.5%", top: "19.91%" },
    state: "Stable State",
    peopleCount: 320,
  },
  {
    name: "Siliana",
    img: Siliana,
    style: { left: "20.83%", top: "14.5%" },
    state: "Dangerous State",
    peopleCount: 180,
  },
  {
    name: "Sidi Bouzid",
    img: SidiBouzid,
    style: { left: "20%", top: "31.5%" },
    state: "Dangerous State",
    peopleCount: 290,
  },
  {
    name: "Béja",
    img: Beja,
    style: { left: "20.7%", top: "2.2%" },
    state: "Average State",
    peopleCount: 170,
  },
  {
    name: "Bizerte",
    img: Bizerte,
    style: { left: "22.1%", top: "-0.99%" },
    state: "Stable State",
    peopleCount: 160,
  },
  {
    name: "manouba",
    img: manouba,
    style: { left: "25.4%", top: "5.6%" },
    state: "Average State",
    peopleCount: 190,
  },
  {
    name: "Nabeul",
    img: Nabeul,
    style: { left: "30.88%", top: "3.5%" },
    state: "Stable State",
    peopleCount: 300,
  },
  {
    name: "benArous",
    img: benArous,
    style: { left: "28.3%", top: "8.5%" },
    state: "Dangerous State",
    peopleCount: 220,
  },
  {
    name: "tunis",
    img: tunis,
    style: { left: "28.4%", top: "6.1%" },
    state: "Dangerous State",
    peopleCount: 400,
  },
  {
    name: "ariana",
    img: ariana,
    style: { left: "28.1%", top: "2.8%" },
    state: "Average State",
    peopleCount: 210,
  },
];

const StateCard = () => {
  return (
    <div className="state-card">
      <div className="state-item">
        <div className="circle red">75%</div>
        <span className="state-label red">Dangerous State</span>
      </div>
      <div className="state-item">
        <div className="circle blue">75%</div>
        <span className="state-label blue">Average State</span>
      </div>
      <div className="state-item">
        <div className="circle indigo">10%</div>
        <span className="state-label indigo">Stable State</span>
      </div>
    </div>
  );
};

// Popup component for region details
const RegionPopup = ({ region, onClose }) => {
  const navigate = useNavigate();

  // Define color based on state
  let stateClass = "";
  if (region.state === "Dangerous State") stateClass = "red";
  else if (region.state === "Average State") stateClass = "blue";
  else if (region.state === "Stable State") stateClass = "indigo";

  const handleDonationClick = () => {
    navigate("/product");
    onClose();
  };

  return (
    <div className="region-popup">
      <div className="popup-header">
        <h2>{region.name.toUpperCase()}</h2>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="popup-content">
        <h3 className={`state-title ${stateClass}`}>{region.state}</h3>
        <p className="region-description">
          Together, let's bring hope and support to {region.peopleCount}{" "}
          homeless people in {region.name}
        </p>
        <div className="region-image">
          <img src={region.img} alt={region.name} />
        </div>
        <button className="donation-button" onClick={handleDonationClick}>
          MAKE A DONATION
        </button>
      </div>
    </div>
  );
};

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleRegionClick = (region) => {
    // Find the full region data
    const regionData = regions.find((r) => r.name === region);
    setSelectedRegion(regionData);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="map-container">
      <div className="state-card-container">
        <StateCard />
      </div>

      {regions.map((region, index) => (
        <img
          key={index}
          src={region.img}
          alt={region.name}
          className={`map-region ${
            selectedRegion && selectedRegion.name === region.name
              ? "selected"
              : ""
          }`}
          style={region.style}
          onClick={() => handleRegionClick(region.name)}
        />
      ))}

      {showPopup && selectedRegion && (
        <div className="popup-overlay">
          <RegionPopup region={selectedRegion} onClose={closePopup} />
        </div>
      )}
    </div>
  );
};

export default Map;
