import React from 'react'
import {
  chinChinlabel,
  milkproduct1,
  vanillalabel,
  milklabel,
  milklabelsealed,
  milksmall2, milkSmall, milksmall3, milksmall4,
} from '../assets';
import FlavourProducts from './FlavourProducts'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from '@material-tailwind/react'
import ChinChinProducts from './ChinChinProducts'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Products = () => {
  const [carouselIndex, setCarouselIndex] = useState(2)
  const slideShowData = useMemo(
    () => [
      milksmall4,
      chinChinlabel,
      milkproduct1,
      vanillalabel,
      milksmall3,
      milklabel,
      milklabelsealed,
      
    ],
    []
  ) // Empty array means it will only be calculated once

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex(prevIndex => (prevIndex + 1) % slideShowData.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [slideShowData.length])

  const handleNavigateLeft = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1)
    }
  }
  const handleNavigateRight = () => {
    if (carouselIndex < slideShowData.length - 1) {
      setCarouselIndex(carouselIndex + 1)
    }
  }

  const [activeTab, setActiveTab] = React.useState('powders')

  const data = [
    {
      label: 'Flavour Powders',
      value: 'powders',
      desc: <FlavourProducts />
    },
    {
      label: 'Chin-Chin',
      value: 'chinchin',
      desc: <ChinChinProducts />
    }
  ]

  return (
    <>
      <div className='relative h-[20rem] md:h-[87dvh] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 p-10 md:p-12'>
        {/* CAROUSEL */}
        <AnimatePresence>
          {slideShowData.map((image, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === carouselIndex ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: 'easeIn' }}
              src={image}
              className='w-full skeleton  absolute z-10 top-0 left-0 h-full object-contain md:object-cover'
              alt='product banner'
              loading='lazy'
            />
          ))}
        </AnimatePresence>
        {/* dark background */}
        <div className='bg-[#eef5f8] w-full product h-full absolute top-0 left-0'></div>

        <div className='absolute top-1/2 left-0 flex z-10 justify-between w-full px-1'>
          <div
            className='p-1 rounded-full bg-white shadow-sm cursor-pointer'
            onClick={handleNavigateLeft}
          >
            <MdKeyboardArrowLeft size={24} />
          </div>
          <div
            className='p-1 rounded-full bg-white shadow-sm cursor-pointer'
            onClick={handleNavigateRight}
          >
            <MdKeyboardArrowRight size={24} />
          </div>
        </div>
      </div>

      {/* PRODUCTS HEADER */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='flex justify-center items-center mt-[3rem] lg:mt-[5rem] gap-0 lg:gap-[1.5rem]'
      >
        <h1 className='text-blossom text-[1.3rem] px-[1rem] lg:px-0 sm:text-[1.8rem] lg:text-[3rem] uppercase font-mont font-bold'>
          Explore our products
        </h1>
      </motion.div>

      <div className=''>
        <Tabs id='custom-animation' value={activeTab}>
          <TabsHeader
            className='font-poppins bg-transparent flex justify-center items-center  mt-[2rem] '
            indicatorProps={{
              className:
                'bg-transparent  border-b-2 border-gray-900 shadow-none rounded-none'
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`${
                  activeTab === value ? 'text-blossom' : 'text-bark'
                } w-full lg:w-[300px] hover:text-[#77808bfa] capitalize text-[0.9rem] sm:text-[1.1rem] font-poppins`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 }
            }}
          >
            {data.map(({ value, desc }) => (
              <TabPanel className='w-full mx-0 px-0' key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  )
}

export default Products
