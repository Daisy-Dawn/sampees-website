import React from 'react'
import {
  chinChinlabel,
  milkproduct1,
  vanillalabel,
  chinChinCarton,
  milklabel,
  milklabelsealed
} from '../assets'
import { Carousel, IconButton } from '@material-tailwind/react'
import { FaShoppingBasket } from 'react-icons/fa'
import FlavourProducts from './FlavourProducts'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from '@material-tailwind/react'
import ChinChinProducts from './ChinChinProducts'

const Products = () => {
  const images = [
    chinChinlabel,
    milkproduct1,
    vanillalabel,
    chinChinCarton,
    milklabel,
    milklabelsealed
  ]
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
    <div>
      {/* CAROUSEL */}
      <Carousel
        autoplay
        loop
        transition={{ duration: 1 }}
        className='h-[50vh] sm:h-[70vh] lg:h-[85vh]'
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant='text'
            color='white'
            size='lg'
            onClick={handlePrev}
            className='!absolute top-2/4 left-4 -translate-y-2/4'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant='text'
            color='white'
            size='lg'
            onClick={handleNext}
            className='!absolute top-2/4 !right-4 -translate-y-2/4'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
              />
            </svg>
          </IconButton>
        )}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt='sampees products'
            className='h-full w-full object-cover'
          />
        ))}
      </Carousel>

      {/* PRODUCTS HEADER */}
      <div className='flex justify-center items-center mt-[3rem] lg:mt-[5rem] gap-0 lg:gap-[1.5rem]'>
        <h1 className='text-blossom text-[1.3rem] px-[1rem] lg:px-0 sm:text-[1.8rem] lg:text-[3rem] uppercase font-mont font-bold'>
          Explore our products
        </h1>
        <FaShoppingBasket className='text-blossom hidden sm:block size-[20px] sm:size-[28px] lg:size-[35px]' />
      </div>

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
    </div>
  )
}

export default Products
