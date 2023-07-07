import React from "react";

const ServiceCards = () => {
  return (
    
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 shadow-xl">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="/assets/cards1.jpg" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
       
        <div className='bg-[#6090d8] flex items-center font-normal rounded-full text-white max-w-fit px-4 py-2 max-h-fit'>Read More</div>
    </div>
</div>

  );
};

export default ServiceCards;
