import React from 'react'
import {danobig, danosmall, milkflavorCarton} from '../assets'
import AboutButton from '../components/AboutButton'

const ChinChinProducts = () => {
  return (
    <>
    {/* CHOPRITE CHIN-CHIN */}
    <div className='bg-[#e2ebf6] px-[1rem] lg:px-[3rem] 2xl:px-[9rem] py-[2rem] xl:py-[4rem] grid md:grid-cols-2 grid-cols-1 items-center md:gap-[1.5rem] lg:gap-[3rem] gap-[2rem]'>
      <div className='order-2 lg:order-1'>
        <h1 className='font-mont text-[1.1rem] text-center lg:text-left lg:text-[1.8rem] text-blossom font-bold'>CHOPRITE CHIN-CHIN</h1>

        <p className='lg:my-[2rem] my-[1rem] font-poppins text-justify text-bark text-[0.8rem] lg:text-[1.1rem] font-medium'>Satisfy your cravings with our Choprite Chin-Chin, a beloved treat crafted with care and expertise by Sampees Global Resources Limited. Made from a blend of premium ingredients including flour, sugar, butter, and a hint of spice, our Choprite Chin-Chin Snack offers a delightful combination of sweetness and crunchiness in every bite. Whether you're enjoying it as a quick pick-me-up or sharing it with friends and family, its irresistible flavor and crispy texture will leave you craving more. Perfect for any occasion  </p>

        <p className='text-blossom italic font-poppins text-[0.8rem] lg:text-[1rem] font-medium'>Made in Nigeria</p>

        <h2 className='mt-[2rem] text-blossom font-mont text-[1rem] lg:text-[1.3rem] font-bold'>Available Sizes</h2>
        <div className='w-full bg-blossom h-[1.5px] mb-[2rem]'></div>
        
        {/* PRODUCT SIZES IMAGE */}
        <div className='grid grid-cols-2 items-center mb-[1.5rem] lg:mb-[2rem] w-[80%] '>
          <div className='flex items-center justify-center gap-[0.3rem] lg:gap-[0.6rem] flex-col'>
            <img className='w-[150px]' src={danobig} alt="" />
            <p className='text-bark font-medium text-[0.8rem] lg:text-[1rem] font-poppins'>500g</p>
          </div>

          <div className='flex items-center justify-center gap-[0.3rem] lg:gap-[0.6rem] flex-col'>
            <img className='w-[150px]' src={danosmall} alt="" />
            <p className='text-bark font-medium text-[0.8rem] lg:text-[1rem] font-poppins'>80g</p>
          </div>
        </div>

        <div className='lg:mx-[4rem] mx-[1.8rem]'>
        <AboutButton title="Order Now" color='white' bg='#321e17' />
        </div>
      </div>
      
      <div className='order-1 flex justify-center items-center lg:order-2'>
          <img className='w-[16rem] lg:w-full md:h-[25rem] lg:h-[35rem] xl:h-auto object-cover' src={danobig} alt='' />
        </div>
    </div>
    </>
  )
}

export default ChinChinProducts
