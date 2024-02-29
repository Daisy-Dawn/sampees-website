import React from 'react'

const About = () => {
  return (
    <div className=''>
      {/* HERO */}
      <div className='flex flex-col about-img'>
        <div className='h-full w-1/2 mx-[4rem] flex gap-7 flex-col justify-center'>
          <div className='flex items-center gap-6'>
          <div className='w-[0.375rem] h-[6.25rem] border-stroke '></div>
          <h1 className='text-[3rem] capitalize text-blossom font-semibold leading-[3.3rem]'> Discover the Artistry Behind Our Bakery & Confectionary Flavor Powders </h1>
          </div>
          <h2 className='text-[1.3rem] capitalize text-bark font-normal leading-[30px]'>At Sampees Global Resources Limited, we are passionate about inspiring creativity and elevating your baked goods and confections with our premium flavor powders. We believe that every detail, from the finest ingredients to expert blending, contributes to the extraordinary taste experience.</h2>
        </div>
      </div>
    </div>
  )
}

export default About
