import React from "react";
const Capabilities = () => {
  const items = [
    "/assets/cap1.jpg",
    "/assets/cap2.jpg",
    "/assets/cap3.jpg",
    "/assets/cap4.jpg",
    "/assets/cap5.jpg",
    "/assets/cap6.jpg",
  ];
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <span className="text-[44px] font-extrabold tracking-wide uppercase">
        Capabilities
      </span>
      <p className="w-1/2 mb-5 text-center text-lg text-[#999999]">
        We combine deep industry expertise, advanced analytics capabilities and
        human-centered approaches to help our clients shape their business
        strategies and drive growth.
      </p>
      <div className="w-[90%] mx-auto ">
        <div className="grid grid-cols-3 grid-flow-row gap-4">
          {items.map((item, i) => (
            <div className="p-4">
              <div class="min-w-fit shadow-2xl flex flex-col justify-start items-center p-2">
                <img src={item} className="w-full mb-4" alt="" />
                <div className="p-4">
                  <div className="flex flex-col justify-center items-center">
                    <span className="text-lg font-extrabold t">
                      Lorem ipsum dolor sit amet.
                    </span>
                    <span className="text-lg tracking-tight text-[#999999] text-center w-[70%]">
                      Lorem ipsum dolor sit amet. Quo itaque galisum
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
