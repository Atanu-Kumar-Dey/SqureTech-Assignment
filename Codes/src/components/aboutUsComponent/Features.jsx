import React from 'react'

const Features = () => {
    
  return (
    <div className='w-full my-5 flex'>
      <div className='bg-[#D1E8E6] flex flex-col space-y-5  p-20 text-[rgba(178, 178, 178, 1)] tracking-widest font-semibold w-1/2'>
        
        <span className='text-[40px]'>Building Great Feature</span>
        <span className='text-base text-[#999999]'>Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita ut accusantium omnis qui expedita vitae aut quibusdam Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias expedita</span>
        <div className="bg-[#6090d8] font-normal  cursor-pointer rounded-full text-white text-xl max-w-fit px-8 py-4 max-h-fit">
          Read More
        </div> </div> 
      <div
        className='w-1/2 bg-[#6090D8] p-12 bg-center bg-cover duration-500'
      >
        <img src="/assets/features.jpg" alt="Logo" className="h-full" />
      </div>
    </div>
  )
}

export default Features
