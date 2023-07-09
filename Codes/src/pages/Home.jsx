import React from "react";
import Carousel from "../components/Carousel";
import TrustedBy from "../components/TrustedBy";
import About from "../components/About";
import Services from "../components/Services";
import Insights from "../components/Insights";
import Industries from "../components/Industries";
import Testimonoals from "../components/Testimonoals";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="">
        <TrustedBy/>
        <About/>
        <Services/>
        <Insights/>
        <Industries/>
        <Testimonoals/>
      </div>
    </div>
  );
};

export default Home;
