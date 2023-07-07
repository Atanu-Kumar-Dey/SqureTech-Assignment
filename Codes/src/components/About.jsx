import React from 'react'

const About = () => {
    
  return (
    <div className='w-full my-5 flex'>
      <div className='bg-[#D1E8E6] flex flex-col space-y-5  p-20 text-[rgba(178, 178, 178, 1)] tracking-widest font-semibold w-1/2'>
        <span className='uppercase text-gray-500'>About</span>
        <span className='text-6xl'>Lorem ipsum dolor sit amet quo itaque.</span>
        <span className='text-sm text-gray-600'>Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita</span>
        <div className='bg-[#6090d8] font-normal rounded-full text-white max-w-fit px-4 py-2 max-h-fit'>Read More</div>
      </div> 
      <div
        className='w-1/2 rounded-2xl bg-center bg-cover duration-500'
      >
        <img src="/assets/about.jpg" alt="Logo" className="h-full  cursor-pointer" />
      </div>
    </div>
  )
}

export default About
