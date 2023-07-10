import React from 'react'

const TrustedBy = () => {
    const img = [
        "/assets/dolby.png",
        "/assets/agoda.png",
        "/assets/rev.png",
        "/assets/eeve.png",
    ]
  return (
    <div className='w-full my-20 '>
      <div className="flex justify-center items-center font-semibold  text-[#cccccc]  text-[24px] uppercase">Trusted By</div>
      <div className='my-10 flex w-[60%] mx-auto justify-center items-center space-x-6'>
        {
          img.map((url,index)=>(
            <img src={url} key={index} className='w-1/4 h-1/2'/>
          ))
        }
      </div>
    </div>
  )
}

export default TrustedBy
