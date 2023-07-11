import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Difference = () => {
  const data = [
    {
      url: "/assets/difference.jpg",
      text1: "Our design thinking pilosophy",
      text2: "We believe in trying, testing, and, tenacity",
    },
    {
      url: "/assets/difference2.jpg",
      text1: "Building a more sustainable world",
      text2: "We’re making sustainbility one of our greatest responsibilities",
    },
    {
      url: "/assets/difference3.jpg",
      text1: "Our research and innovation",
      text2: "We believe in the power of collective knowlege.",
    },
    {
      url: "/assets/difference.jpg",
      text1: "Our design thinking pilosophy",
      text2: "We believe in trying, testing, and, tenacity",
    },
    {
      url: "/assets/difference2.jpg",
      text1: "Building a more sustainable world",
      text2: "We’re making sustainbility one of our greatest responsibilities",
    },
    {
      url: "/assets/difference3.jpg",
      text1: "Our research and innovation",
      text2: "We believe in the power of collective knowlege.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-[44px] font-extrabold tracking-wide uppercase">
        The SquareTech difference
      </span>
      <p className="w-1/2 mb-5 text-center text-lg text-[#999999]">
        Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut
        accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit
        amet. Quo itaque galisum
      </p>
      <div className="w-full p-8">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}>
          {data.map((item, index) => (
            <SwiperSlide className="relative">
              <div className="p-12 bg-white">
                <img src={item.url} alt="" />
                <div className="absolute  flex flex-col top-[40%] p-6">
                  <div className="text-xl text-white font-bold"> {item.text1}</div>
                  <span className="text-lg text-white">
                   {item.text2}
                  </span>
                  <div className="text-base  font-bold text-white">
                   READ MORE
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Difference;
