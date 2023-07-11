import React from "react";

const Hero = () => {
  return (
    <div className="h-[100vh] w-full group">
      <div
        style={{ backgroundImage: "url('/assets/hero3.jpg')" }}
        className="w-full h-full bg-center bg-cover duration-500">
        <div className=" absolute top-[30%] w-[80%] font-semibold text-white">
          <div className="text-[72px] w-2/3 mx-auto">
            Build a future you believe in
          </div>
          <div className="text-[20px] tracking-wider w-2/3 mx-auto">
            Explore opportunities
          </div>
          <div className="text-base w-2/3 mx-auto mt-4">
            <div className="relative flex space-x-5">
              <input
                type="text"
                placeholder="Search Jobs"
                className="w-7/12 mx-left p-4 text-lg text-[]  mb-5 h-12 rounded-full relative decoration-none"
              />
              <button className="bg-[#6090d8] rounded-full h-12 px-4 py-2 text-white flex space-x-10 justify-center items-center uppercase">
                Search by
                <img src="/assets/borderRight.png" className="rotate-90 w-8" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
