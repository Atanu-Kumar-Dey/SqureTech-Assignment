import React from "react";

const Testimonoals = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/assets/testimon_bg.jpg")',
      }}
      className="w-full my-5 flex bg-cover bg-center">
      <div className="flex flex-col space-y-5  p-20 text-[rgba(178, 178, 178, 1)] tracking-widest font-semibold w-2/5">
        <span className="uppercase text-white text-[48px]">
          WHAT <br /> PEOPLE SAY
        </span>
       
        <span className="text-base text-white">
          Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita
          ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum
          dolor sit amet. Quo itaque galisum vel molestias expedita
        </span>
        
      </div>
      <div className="w-3/5 rounded-2xl bg-center bg-cover duration-500">
      
      </div>
    </div>
  );
};

export default Testimonoals;
