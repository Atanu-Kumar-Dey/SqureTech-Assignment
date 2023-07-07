import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: '/assets/hero1.jpg',
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolorem dolore esse minima at officiis."
    },
    {
        url: '/assets/hero2.jpg',
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolorem dolore esse minima at officiis."
    },
    {
        url: '/assets/hero3.jpg',
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolorem dolore esse minima at officiis."
      }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-[100vh] w-full group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-white cursor-pointer'>
      <img src="/assets/left.svg" onClick={prevSlide} className='w-6' />
      </div>
      <div className=' w-1/2 group-hover:block absolute top-[30%]    text-white left-16 p-3'>
       <span className='text-6xl'>Lorem ipsum dolor sit amet, consectetur adipisicing</span> 
        <span className='text-sm block mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore soluta harum eos temporibus ipsam distinctio quam a, ex accusamus animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, a?</span>
      </div>
      {/* Right Arrow */}
      <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-white cursor-pointer'>
        <img src="/assets/next.svg" onClick={nextSlide} className='w-6' />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled className='text-white my-[-40px] '/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;