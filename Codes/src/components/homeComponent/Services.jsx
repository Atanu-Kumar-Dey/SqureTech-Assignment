import React from "react";
import ServiceCards from "./ServiceCards";

const Services = () => {
  return (
    <div className="w-full my-20 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center text-[#cccccc] font-semibold text-[24px] uppercase">
        Services
      </div>
      <span className="text-4xl tracking-widesr font-semibold my-3">
        {" "}
        Lorem ipsum dolor sit amet.
      </span>
      <div className="my-5 flex w-[95%] mx-auto justify-center items-center space-x-6">
        <ServiceCards />
        <div className="mt-20">
          <ServiceCards />
        </div>
        <ServiceCards />
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <button
          type="button"
          className="text-white bg-[#6090d8] flex space justify-center items-center px-6 py-4 text-xl rounded-full ">
          More Services
          <img src="/assets/next.svg" className="rotate-90 ml-4 w-2" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Services;
