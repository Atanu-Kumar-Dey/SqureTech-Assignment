import React from "react";
import Carousel from "../components/Carousel";
import TrustedBy from "../components/TrustedBy";
import About from "../components/About";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="">
        <TrustedBy/>
        <About/>
        <Services/>
      </div>
    </div>
  );
};

export default Home;
