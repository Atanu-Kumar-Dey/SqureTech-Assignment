import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[100vh] w-full group">
      <div
        style={{ backgroundImage: "url('/assets/hero2.jpg')" }}
        className="w-full h-full bg-center bg-cover duration-500"></div>

      <div className=" w-full  absolute top-[40%] text-center  font-semibold text-white">
        <span className="text-[72px]">
        About SquareTech
        </span>
        <div className="text-base w-2/3 tracking-wide mx-auto mt-4">
        Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita. Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
