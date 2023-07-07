import React from "react";
import Carousel from "../components/Carousel";
import TrustedBy from "../components/TrustedBy";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="">
        <TrustedBy/>
        <About/>
      </div>
    </div>
  );
};

export default Home;
