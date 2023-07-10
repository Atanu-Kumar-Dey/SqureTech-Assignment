import React from "react";

const AboutUs = () => {
  const items = [
    "OUR HISTORY",
    "OUR STORY",
    "OUR MANAGEMENT",
    "OUR RESPONSIBILITY",
  ];
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <span className="text-[44px] font-extrabold tracking-wide">ABOUT US</span>
      <p className="w-1/2 mb-5 text-center text-base text-[#999999]">
        Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut
        accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit
        amet. Quo itaque galisum vel molestias expedita
      </p>
      <div class="grid grid-cols-2 gap-6 w-[90%]">
        {items.map((item, i) => (
          <div className="mx-4">
            <div class="min-w-fit shadow-2xl flex justify-start items-center p-16">
              <div className="flex flex-col justify-start items-start">
                <span className="text-[25px] tracking-wider font-bold max-w-fit border-[#6090d8] border-b-4 mb-5">
                  {item}
                </span>
                <span>
                  Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias
                  expedita ut accusantium omnis qui expedita vitae aut quibusdam
                  Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias
                  expedita Lorem ipsum dolor sit amet. Quo itaque galisum vel
                  molestias expedita ut accusantium omnis qui expedita vitae.
                </span>
                <div className="bg-[#6090d8] my-3 font-normal cursor-pointer rounded-full text-white text-xl max-w-fit px-6 py-3 max-h-fit">
                  Read More
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
