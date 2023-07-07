import React from 'react'

const About = () => {
    const slides = [
        {
          url: '/assets/hero1.jpg'
        },
    ]
  return (
    <div className='w-full my-5 flex'>
      <div className='bg-[#D1E8E6] w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo modi officiis culpa excepturi ex vero perspiciatis quibusdam consequatur. Dolorum saepe nam earum. Praesentium explicabo beatae aut cum labore in magnam assumenda dolorum, commodi exercitationem placeat rerum eos expedita delectus officiis fuga omnis recusandae adipisci! Necessitatibus libero iusto nulla assumenda rem nobis aspernatur excepturi unde, optio beatae? Eveniet adipisci ipsa, exercitationem nobis sunt, deserunt quo temporibus esse ea praesentium neque accusantium reprehenderit pariatur? Velit deserunt harum dolorem porro, culpa, libero fugit atque qui quo, eveniet assumenda reiciendis. Omnis ducimus accusantium doloribus cupiditate provident quis, possimus ut facere qui deserunt accusamus dolorum.</div>
      <div
        style={{ backgroundImage: `url(${slides[0].url})` }}
        className='w- h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
    </div>
  )
}

export default About
