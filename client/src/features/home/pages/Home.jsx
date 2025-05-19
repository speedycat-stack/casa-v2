import React from "react";
import Header from "../../../components/Header/Header";
import About from "../../../components/About/About";
import Mission from "../../../components/Mission/Mission";
import Goals from '../../../components/Goals/Goals';
import Partners from '../../../components/Partners/Partners';
import bgIndex from '../../../assets/sdf.png';

const Home = () => {
  return (
    <>
      <Header
        variant="light"
        bgImage={bgIndex}
        showHero={true}
      />
      <About />
      <Mission />
      <Goals />
      <Partners />
    </>
  );
};

export default Home;