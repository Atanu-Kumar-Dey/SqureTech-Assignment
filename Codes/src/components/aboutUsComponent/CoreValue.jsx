import React from "react";
import CoreCards from "./CoreCards";

const CoreValue = () => {
  const items = [
    { url: "/assets/core1.jpg", text: "About SquareTech" },
    { url: "/assets/core2.jpg", text: "Responsible company" },
    { url: "/assets/core2.jpg", text: "Next-Generation service" },
    { url: "/assets/core4.jpg", text: "Skill to succeed" },
    { url: "/assets/core5.jpg", text: "Develop access of knowledge" },
    { url: "/assets/core6.jpg", text: "Tech for good" },
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
            <CoreCards key={i} url={item.url} text={item.text} />
          </div>
        ))}
      </div>
      <span className="text-[44px] font-extrabold tracking-wide">
      Our purpose
      </span>
      <p className="w-1/2 mb-5 text-center text-base text-[#999999]">
      Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita
      </p>
    </div>
  );
};

export default CoreValue;
