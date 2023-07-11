import React from "react";

const Benifits = () => {
  const data = [
    { icon: "/assets/health.svg", heading: "Medical Insurance" },
    { icon: "/assets/validation.svg", heading: "Vacation and Sick leaves" },
    {
      icon: "/assets/bonus.svg",
      heading: "Bonuses and Benefits in Each Levels",
    },
    { icon: "/assets/dollar.svg", heading: "Paid Internship for Students" },
  ];
  return (
    <div className="p-8 bg-[#6090D8] w-ful min-h-fit">
      <div className="">
        <span className="text-[62px] text-white font-bold">Our Benifits</span>

        <div class="grid grid-cols-2 grid-flow-row gap-4">
          {data.map((item, index) => (
            <div className="p-6 text-white justify-start items-start flex flex-col">
              <div className="flex justify-start items-start space-x-7 ">
                <img src={item.icon} className="w-24" alt="" />
                <div className="text-[38px] font-bold">{item.heading}
                <div className="text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </div></div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benifits;
