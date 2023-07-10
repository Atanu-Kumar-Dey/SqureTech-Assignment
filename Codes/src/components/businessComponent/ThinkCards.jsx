import React from "react";
import { TbMathGreater } from "react-icons/tb";

const ThinkCards = ({ url }) => {
  return (
    <div class="min-w-fit flex justify-start items-center p-4">
      <img src={url} className="w-1/2 mr-4" alt="" />
      <div className="flex flex-col justify-start items-start">
        <span className="text-[38px] font-bold">Lorem Ipsum.</span>
        <span className="text-[#999999] mb-5">
          Lorem ipsum dolor sit amet Aut alias.Lorem ipsum dolor sit amet Aut
          alias.
        </span>
        <span className="flex justify-center items-center space-x-1 font-bold text-[#6090D8] cursor-pointer">
          Read More
        <TbMathGreater size={20} className="font-bold" />
        </span>
      </div>
    </div>
  );
};

export default ThinkCards;
