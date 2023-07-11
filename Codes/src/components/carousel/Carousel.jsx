import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  const data=[
    {
      url:"/assets/leader.jpg",
      name:"Linda"
    },
    {
      url:"/assets/leader2.jpg",
      name:"Max"
    },
    {
      url:"/assets/leader.jpg",
      name:"Charly"
    },
    {
      url:"/assets/leader3.jpg",
      name:"Linda"
    },
    {
      url:"/assets/leader2.jpg",
      name:"Max"
    },
    {
      url:"/assets/leader3.jpg",
      name:"Charly"
    },
  ]
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
      {
        data.map((item,index)=>(
          <SwiperSlide>
            <div className='p-4 flex flex-col text-center bg-white'>
              <img src={item.url} alt="" />
              <span className='text-xl font-bold my-2'> {item.name}</span>
              <span className='text-lg text-[#7F7F7F] font-extrabold'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, facere!"</span>
            </div>
          </SwiperSlide>
        ))
      }
     
    </Swiper>
  );
};