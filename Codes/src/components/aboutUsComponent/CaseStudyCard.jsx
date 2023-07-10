import React from "react";
import {TbMathGreater} from "react-icons/tb"

const CaseStudyCard = ({ url, text }) => {
  return (
    <div class="min-w-fit shadow-2xl flex flex-col justify-start items-center p-2">
      <img src={url} className="w-full mb-4" alt="" />
      <div className="p-4">
        <div className="flex flex-col justify-start items-start">
          <span className="text-[20px] uppercase font-bold text-[#999999]">
            {text}
          </span>
          <span className="text-[36px] tracking-tight font-extrabold my-4">
            Lorem ipsum dolor sit alias.
          </span>
          <div className="flex justify-center items-center space-x-1 text-[#6090D8] cursor-pointer">
            <span className="font-bold">Read Case Study</span>
            <TbMathGreater size={20} className="font-bold"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
