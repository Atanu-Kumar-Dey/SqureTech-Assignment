import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Navbar() {
  const slides = [
    {
      url: "/assets/hero1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolorem dolore esse minima at officiis.",
    },
    {
      url: "/assets/hero2.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolorem dolore esse minima at officiis.",
    },
    {
      url: "/assets/hero3.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolorem dolore esse minima at officiis.",
    },
  ];
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        {slides.map((item, i) => (
          <SwiperSlide>
            <img src={item.url} alt="" className="max-h-[100vh]" key={i}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
