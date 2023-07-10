import React from "react";
import ThinkCards from "../businessComponent/ThinkCards";
const WhatWeThink = () => {
  const items = [
    "/assets/think1.jpg",
    "/assets/think2.jpg",
    "/assets/think2.jpg",
    "/assets/think4.jpg"
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center py-10">
      <span className="text-[44px] font-extrabold tracking-wide">
        Core Value of SquareTech
      </span>
      <p className="w-1/2 mb-5 text-center text-base text-[#999999]">
        Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut
        accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit
        amet. Quo itaque galisum vel molestias expedita
      </p>
      <div class="grid grid-cols-2 w-[90%]">
        {items.map((item, i) => (
          <div className="p-4">
            <ThinkCards key={i} url={item} text={"Lorem Ipsum"} />
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default WhatWeThink;
