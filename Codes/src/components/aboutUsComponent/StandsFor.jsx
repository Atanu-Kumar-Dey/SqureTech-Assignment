import React from "react";
import CoreCards from "./CoreCards";

const StandsFor = () => {
  const items = [
    { url: "/assets/stands1.jpg", text: "MISSION " },
    { url: "/assets/stands2.jpg", text: "ETHICS " },
    { url: "/assets/stands2.jpg", text: "DIVERSITY" },
    { url: "/assets/stands4.jpg", text: "INCLUSION " }
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center py-10 ">
      <span className="text-[44px] font-extrabold tracking-wide">
        WHAT WE STAND FOR
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
      <span className="text-[44px] mt-5 font-extrabold tracking-wide">
      OUR PEOPLES
      </span>
      <p className="w-1/2 mb-5 text-center text-base text-[#999999]">
      Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita
      </p>
    </div>
  );
};

export default StandsFor;
