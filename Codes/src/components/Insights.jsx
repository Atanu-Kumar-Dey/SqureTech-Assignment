import React from "react";

const Insights = () => {
  return (
    <div className="w-full my-5 flex">
     
      <div className="w-1/2 rounded-2xl bg-center bg-cover duration-500">
        <img
          src="/assets/insights.jpg"
          alt="Logo"
          className="h-full"
        />
      </div>
      <div className="bg-[#D1E8E6]  items-end flex flex-col space-y-5  p-20 text-[rgba(178, 178, 178, 1)] tracking-widest font-semibold w-1/2">
        <div className="uppercase text-gray-500">Insights</div>
        <div className="text-6xl text-right">Lorem ipsum dolor sit amet quo itaque.</div>
        <div className="text-sm text-right text-gray-600">
          Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita
          ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum
          dolor sit amet. Quo itaque galisum vel molestias expedita
        </div>
        <div className="bg-[#6090d8] font-normal cursor-pointer rounded-full text-white text-xl max-w-fit px-8 py-4 max-h-fit">
          Read More
        </div>
      </div>
    </div>
  );
};

export default Insights;
