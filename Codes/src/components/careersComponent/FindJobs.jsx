import React from "react";
import CaseStudyCard from "../aboutUsComponent/CaseStudyCard";

const FindJobs = () => {
  const items = [
    { url: "/assets/case1.jpg", text: "HIGH TECH" },
    { url: "/assets/case2jpg.jpg", text: "SOFTWARE" },
    { url: "/assets/case3.jpg", text: "SUSTAINABILITY" },
  ];
  return (
    <div className="flex my-10 flex-col justify-center items-center">
      <span className="text-[44px] font-extrabold tracking-wide">
        CASE STUDIES
      </span>
      <p className="w-1/2 mb-5 text-center text-base text-[#999999]">
        Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut
        accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit
        amet. Quo itaque galisum vel molestias expedita
      </p>
      <div className="flex flex-col">
        <div className="flex w-[90%] mx-auto ">
          {items.map((item, i) => (
            <div className="p-4">
              <CaseStudyCard key={i} url={item.url} text={item.text} />
            </div>
          ))}
        </div>
        <div className="flex w-[90%] mx-auto ">
          {items.map((item, i) => (
            <div className="p-4">
              <CaseStudyCard key={i} url={item.url} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
