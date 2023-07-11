import React from "react";

const WhySection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-[44px] font-extrabold tracking-wide uppercase">
        Why SquareTech ?
      </span>
      <p className="w-1/2 mb-5 text-center text-lg text-[#999999]">
        Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut
        accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit
        amet. Quo itaque galisum
      </p>
      <div className="w-full flex p-8 bg-[#6090D8]">
        <div className="w-[60%]">
          <img src="/assets/Why.jpg" alt="" />{" "}
        </div>
        <div className="w-1/3 flex text-white justify-center items-center  flex-col ml-6">
          <span className="text-[42px] font-extrabold">
            Scrambled it to make a{" "}
          </span>{" "}
          <span className="text-lg">
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default WhySection;
