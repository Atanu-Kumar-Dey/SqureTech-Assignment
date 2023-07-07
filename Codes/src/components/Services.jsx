import React from 'react'
import ServiceCards from './ServiceCards'

const Services = () => {
  return (
    <div className='w-full my-20 flex flex-col justify-center items-center'>
      <div className="flex justify-center items-center text-[#cccccc] font-semibold text-[24px] uppercase">Services</div>
      <span className='text-4xl tracking-widesr font-semibold my-3'> Lorem ipsum dolor sit amet.</span>
      <div className='my-10 flex w-[80%] mx-auto justify-center items-center space-x-6'>
        <ServiceCards/>
        <ServiceCards className="pt-20"/>
        <ServiceCards/>
      </div>
    </div>
  )
}

export default Services
