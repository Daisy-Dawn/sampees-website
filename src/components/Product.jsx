import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {AnimatePresence, motion} from "framer-motion";
import AboutButton from "../components/AboutButton";
import Surface from './animation/Surface';
import LazyLoad from 'react-lazy-load';


const Product = ({header, description, gramsBig, gramsSmall, productImageBig, productImageSmall}) => {
    const navigate = useNavigate();
    const [displayedProduct, setDisplayedProduct] = useState(productImageSmall);

    // Set display image
    const handleSetDisplayedProduct = (image)=>{
        setDisplayedProduct(image);
    }

    const handleNavigate = ()=>{
        navigate("/contact-us")
    }

  return (
    <div className='bg-[#e2ebf6] px-[1rem] lg:px-[3rem] 2xl:px-[9rem] py-[2rem] xl:py-[4rem] grid md:grid-cols-2 grid-cols-1 items-center md:gap-[1.5rem] lg:gap-[3rem] gap-[2rem]'>
          <div className='order-2 lg:order-1'>
            <Surface justify='start'>
              <h1 className='font-mont text-[1.1rem] text-center lg:text-left lg:text-[1.8rem] text-blossom font-bold'>{header}</h1>
            </Surface>
            <Surface justify='start'>
              <p className='lg:my-[2rem] my-[1rem] font-poppins text-justify text-bark text-[0.8rem] lg:text-[1.1rem] font-medium'>{description}</p>
            </Surface>
            <Surface justify='start'>
              <p className='text-blossom italic font-poppins text-[0.8rem] lg:text-[1rem] font-medium'>Made in Nigeria</p>
            </Surface>
            <Surface justify='start'>
              <h2 className='mt-[2rem] text-blossom font-mont text-[1rem] lg:text-[1.3rem] font-bold'>Available Sizes</h2>
            </Surface>
            <Surface>
              <div className='w-full bg-blossom h-[1.5px] mb-[2rem]'></div>
            </Surface>
            
            {/* PRODUCT SIZES IMAGE */}
            <div className='grid grid-cols-2 items-center justify-between mb-[1.5rem] lg:mb-[2rem] '>
              <Surface>
                <motion.div 
                    whileTap={{scale:0.98}} 
                    whileHover={{scale:1.03}} 
                    transition={{duration:0.3}}  
                    onClick={()=> handleSetDisplayedProduct(productImageBig)} 
                    className='flex items-center justify-center gap-[0.3rem] lg:gap-[0.6rem] flex-col cursor-pointer'
                >
                    <img className='w-[150px]' src={productImageBig} alt={header} />
                    <p className='text-bark font-medium text-[0.8rem] lg:text-[1rem] font-poppins'>{gramsBig}</p>
                </motion.div>
              </Surface>
              <Surface>
                <motion.div 
                    whileTap={{scale:0.98}} 
                    whileHover={{scale:1.03}} 
                    transition={{duration:0.3}} 
                    onClick={()=> handleSetDisplayedProduct(productImageSmall)} 
                    className='flex items-center justify-center gap-[0.3rem] lg:gap-[0.6rem] flex-col cursor-pointer'
                >
                    <img className='w-[150px]' src={productImageSmall} alt={header} />
                    <p className='text-bark font-medium text-[0.8rem] lg:text-[1rem] font-poppins'>{gramsSmall}</p>
                </motion.div>
              </Surface>
            </div>
            <Surface>
              <div className='lg:mx-[4rem] mx-[1.8rem]'>
              <AboutButton title="Order Now" color='white' hover='white' bgHover='#7E212C' bg='#321e17' action={handleNavigate} />
              </div>
            </Surface>
          </div>
          <div className='order-1 flex justify-center items-center lg:order-2'>
            <AnimatePresence>
                <Surface>
                    <motion.img 
                        key={displayedProduct}
                        initial={{opacity:0, y:20}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0,y:-20}}
                        transition={{duration:0.5}} 
                        className='w-[16rem] lg:w-full md:h-[25rem] lg:h-[35rem] xl:h-auto object-cover' 
                        src={displayedProduct} alt={header} 
                    />
                </Surface>
            </AnimatePresence>
          </div>
    </div>
  )
}

const ProductWithIngredients = ({header, description, ingredients, gramsBig, gramsSmall, productImageBig, productImageSmall}) => {
    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [displayedProduct, setDisplayedProduct] = useState(productImageSmall);

    const handleSetDisplayedProduct = (image)=>{
        setDisplayedProduct(image);
    }
    const handleNavigate = ()=>{
        navigate("/contact-us")
    }

    return (
        <div className='bg-[#F8F9FA] px-[1rem] lg:px-[3rem] 2xl:px-[9rem] py-[2rem] xl:py-[6rem] grid md:grid-cols-2 grid-cols-1 items-center md:gap-[1.5rem] lg:gap-[3rem] gap-[2rem]'>
            <div className='order-2 lg:order-1'>
              <Surface>
                <h1 className='font-mont text-[1.1rem] text-center lg:text-left lg:text-[1.8rem] text-blossom font-bold'>
                  {header}
                </h1>
              </Surface>
              <Surface justify='start'>
                <p className='lg:my-[2rem] my-[1rem] font-poppins text-justify text-bark text-[0.8rem] lg:text-[1.1rem] font-medium'>
                  {description}
                </p>
              </Surface>
              <Surface justify='start'>
                <h2 className='text-blossom font-poppins text-[1rem] lg:text-[1.2rem] font-semibold'>Ingredients:</h2>
              </Surface>
              <Surface justify='start'>
                <p className='text-bark text-[1.1rem] font-poppins font-medium'>{ingredients}</p>
              </Surface>
              <Surface>
                <h2 className='mt-[2rem] text-blossom font-mont text-[1rem] lg:text-[1.3rem] font-bold'>
                  Available Sizes
                </h2>
              </Surface>
              <Surface>
                <div className='w-full bg-blossom h-[1.5px] mb-[2rem]'></div>
              </Surface>

              {/* PRODUCT SIZES IMAGE */}
              <div className='grid grid-cols-2 items-center justify-between mb-[1.5rem] lg:mb-[2rem]'>
                <Surface>
                    <motion.div 
                        whileTap={{scale:0.98}} 
                        whileHover={{scale:1.03}} 
                        transition={{duration:0.3}} 
                        onClick={()=> handleSetDisplayedProduct(productImageBig)}  
                        className='flex items-center justify-center gap-[0.3rem] lg:gap-[0.6rem] flex-col cursor-pointer'
                    >
                        <LazyLoad width={150} offset={100}>
                        <img
                            className='w-[150px] '
                            src={productImageBig}
                            alt={header}
                            onLoad={() => setImageLoaded(true)} // Set imageLoaded state to true when the image is loaded
                        />
                        </LazyLoad>
                        {!imageLoaded && <div className='skeleton'></div>}{' '}
                        {/* Show skeleton only when image is not loaded */}
                        <p className='text-bark font-medium text-[0.8rem] lg:text-[1rem] font-poppins'>
                        {gramsBig}
                        </p>
                    </motion.div>
                </Surface>
                <Surface>
                  <motion.div 
                        whileTap={{scale:0.98}} 
                        whileHover={{scale:1.03}} 
                        transition={{duration:0.3}}  
                        onClick={()=> handleSetDisplayedProduct(productImageSmall)} 
                        className='flex items-center justify-center gap-[0.3rem] lg:gap-[0.6rem] flex-col cursor-pointer'
                    >
                        <LazyLoad width={150} offset={100}>
                        <img
                            className='w-[150px] '
                            src={productImageSmall}
                            alt={header}
                            onLoad={() => setImageLoaded(true)} // Set imageLoaded state to true when the image is loaded
                        />
                        </LazyLoad>
                        {!imageLoaded && <div className='skeleton'></div>}{' '}
                        {/* Show skeleton only when image is not loaded */}
                        <p className='text-bark font-medium text-[0.8rem] lg:text-[1rem] font-poppins'>
                        {gramsSmall}
                        </p>
                    </motion.div>
                </Surface>
              </div>

              <Surface>
                <div  className='lg:mx-[4rem] mx-[1.8rem]'>
                  <AboutButton title='Order Now' color='white' hover='white' bgHover='#7E212C' bg='#321e17' action={handleNavigate} />
                </div>
              </Surface>
            </div>

            <div className='order-1 lg:order-2 flex justify-center items-center '>
                <AnimatePresence>
                    <Surface>
                        <LazyLoad height={400} offset={100}>
                        <motion.img
                            key={displayedProduct}
                            initial={{opacity:0, y:20}}
                            animate={{opacity:1, y:0}}
                            exit={{opacity:0,y:-20}}
                            transition={{duration:0.5}} 
                            className='w-[16rem] lg:w-full h-full md:h-[25rem] lg:h-[35rem] xl:h-auto object-cover'
                            src={displayedProduct}
                            alt={header}
                            onLoad={() => setImageLoaded(true)} // Set imageLoaded state to true when the image is loaded
                        />
                        </LazyLoad>
                        {!imageLoaded && <div className='skeleton'></div>}{' '}
                        {/* Show skeleton only when image is not loaded */}
                    </Surface>
                </AnimatePresence>
            </div>
          </div>
    )
}

export default Product;
export {ProductWithIngredients};