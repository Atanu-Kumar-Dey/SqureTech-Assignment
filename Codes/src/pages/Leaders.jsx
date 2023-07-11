import React from "react";
import Carousel from "../components/carousel/Carousel";
const Leaders = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <span className="uppercase text-[40px] font-extrabold text-center  mb-10">
        Our Leaders
      </span>
      <div
        className="w-full h-[90vh] bg-cover flex justify-center items-center p-12"
        style={{ backgroundImage: "url('/assets/testimon_bg.jpg')" }}>
          <Carousel/>
        </div>
    </div>
  );
};

export default Leaders;
