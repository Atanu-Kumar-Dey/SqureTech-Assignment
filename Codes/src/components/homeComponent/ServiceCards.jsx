import React from "react";

const ServiceCards = ({url}) => {
  return (
    <div class="w-full cursor-pointer max-w-sm bg-white border border-gray-200   dark:bg-gray-800 shadow-xl">
      <img
        class="p-2 rounded-t-lg"
        src={url}
        alt="product image"
      />

      <div class="px-3 py-2 mb-4 flex flex-col items-center">
        <div className="w-4/5 mx-auto flex items-center font-bold text-xl px-3  text-center my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="bg-[#6090d8] cursor-pointer flex items-center font-normal rounded-full text-base text-white max-w-fit px-3 py-1 max-h-fit">
          Read More
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
