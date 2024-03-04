import React from 'react'
import {danobig, danosmall, milkflavorCarton} from '../assets'
import AboutButton from '../components/AboutButton'

const FlavourProducts = () => {
  return (
    <>
      {/* MILK FLAVOUR */}
      <div className='bg-[#F8F9FA] px-[1rem] lg:px-[3rem] 2xl:px-[9rem] py-[2rem] xl:py-[6rem] grid md:grid-cols-2 grid-cols-1 items-center md:gap-[1.5rem] lg:gap-[3rem] gap-[2rem]'>
      <div className='order-2 lg:order-1'>
        <h1 className='font-mont text-[1.1rem] text-center lg:text-left lg:text-[1.8rem] text-blossom font-bold'>DE-SUNNEX MIX MILK FLAVOUR POWDER</h1>

        <p className='lg:my-[2rem] my-[1rem] font-poppins text-justify text-bark text-[0.8rem] lg:text-[1.1rem] font-medium'>Indulge in the rich and comforting taste of our De-Sunnex Mix Milk Flavor Powder. Made with a blend of premium ingredients including powdered milk, granulated sugar, and milk flour, this flavor powder is a versatile addition to your culinary creations. Our Flavour Powder captures the essence of creamy, delicious milk in a convenient powder form.</p>

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
      
      <div className='order-1 flex justify-center items-center lg:order-2 '>
          <img className='w-[16rem] md:h-[25rem] lg:h-[35rem] xl:h-auto lg:w-full  object-cover' src={danobig} alt='' />
        </div>
    </div>

    {/* VANILLA FLAVOUR */}
    <div className='bg-[#e2ebf6] px-[1rem] lg:px-[3rem] 2xl:px-[9rem] py-[2rem] xl:py-[4rem] grid md:grid-cols-2 grid-cols-1 items-center md:gap-[1.5rem] lg:gap-[3rem] gap-[2rem]'>
      <div className='order-2 lg:order-1'>
        <h1 className='font-mont text-[1.1rem] text-center lg:text-left lg:text-[1.8rem] text-blossom font-bold'>PEE-SABINA VANILLA FLAVOUR POWDER</h1>

        <p className='lg:my-[2rem] my-[1rem] font-poppins text-justify text-bark text-[0.8rem] lg:text-[1.1rem] font-medium'>Indulge in the exquisite aroma and delicate sweetness of our Pee-Sabina Vanilla Flavor Powder. Crafted with care using the finest ingredients, including pure vanilla extract, sugar, and natural flavorings, this powder adds a touch of sophistication to any dish. This versatile powder delivers the sweet, floral notes beloved by bakers and dessert enthusiasts everywhere. </p>

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

        <div className='lg:mx-[4rem] mx-[1.8rem'>
        <AboutButton title="Order Now" color='white' bg='#321e17' />
        </div>
      </div>
      
      <div className='order-1 flex justify-center items-center lg:order-2'>
          <img className='w-[16rem] lg:w-full md:h-[25rem] lg:h-[35rem] xl:h-auto object-cover' src={danobig} alt='' />
        </div>
    </div>

    {/* BANANA FLAVOUR */}
    <div className='bg-[#F8F9FA] px-[1rem] lg:px-[3rem] 2xl:px-[9rem] py-[2rem] xl:py-[4rem] grid md:grid-cols-2 grid-cols-1 items-center md:gap-[1.5rem] lg:gap-[3rem] gap-[2rem]'>
      <div className='order-2 lg:order-1'>
        <h1 className='font-mont text-[1.1rem] text-center lg:text-left lg:text-[1.8rem] text-blossom font-bold'>DE-SUNNEX MIX BANANA FLAVOUR POWDER</h1>

        <p className='lg:my-[2rem] my-[1rem] font-poppins text-justify text-bark text-[0.8rem] lg:text-[1.1rem] font-medium'>Immerse yourself in the tropical delight of our De-Sunnex Mix Banana Flavor Powder. Made with premium ingredients, including ripe banana essence, sugar, and natural flavorings, this powder encapsulates the luscious sweetness and distinctive aroma of freshly-picked bananas. Whether you're creating banana-flavored cakes, shakes, or ice creams, this powder promises to infuse your creations with irresistible banana goodness.  </p>

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

    {/* COCONUT FLAVOUR */}
    <div className='bg-[#e2ebf6] px-[1rem] lg:px-[3rem] 2xl:px-[9rem] py-[2rem] xl:py-[4rem] grid md:grid-cols-2 grid-cols-1 items-center md:gap-[1.5rem] lg:gap-[3rem] gap-[2rem]'>
      <div className='order-2 lg:order-1'>
        <h1 className='ffont-mont text-[1.1rem] text-center lg:text-left lg:text-[1.8rem] text-blossom font-bold'>DE-SUNNEX MIX COCONUT FLAVOUR POWDER</h1>

        <p className='lg:my-[2rem] my-[1rem] font-poppins text-justify text-bark text-[0.8rem] lg:text-[1.1rem] font-medium'>Embark on a journey to the tropics with our De-Sunnex Mix Coconut Flavor Powder. Crafted with the finest ingredients, including coconut extract, sugar, and natural flavorings, this powder captures the essence of paradise in every spoonful. Whether you're adding it to smoothies, desserts, or baked goods, its rich coconut flavor will evoke memories of tropical bliss.  </p>

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

export default FlavourProducts
