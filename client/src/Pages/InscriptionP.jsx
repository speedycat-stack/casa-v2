import React from 'react';
import Navbar2 from '../components/Navbar/Navbar2';
import Inscription from '../components/Inscription/Inscription';
import Footer from '../components/Footer/Footer';
import BackButton from '../components/BackButton/BackButton';
import './InscriptionP.css';

const InscriptionP = () => {
  return (
    <div className="inscription-page">
      <Navbar2 />
      <BackButton bgColor="white" arrowColor="#34343466" />
      <Inscription />
      <Footer />
    </div>
  );
};

export default InscriptionP;
