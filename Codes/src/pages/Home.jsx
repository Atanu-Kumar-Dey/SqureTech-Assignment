import React from "react";
import Carousel from "../components/homeComponent/Carousel";
import TrustedBy from "../components/homeComponent/TrustedBy";
import About from "../components/homeComponent/About";
import Services from "../components/homeComponent/Services";
import Insights from "../components/homeComponent/Insights";
import Industries from "../components/homeComponent/Industries";
import Testimonoals from "../components/homeComponent/Testimonoals";
import Navbar from "../components/carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel />
        {/* <Navbar/> */}
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
