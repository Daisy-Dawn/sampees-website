import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import carousel1 from "../../assets/home/carousel1.jpg";
import carousel2 from "../../assets/home/carousel2.jpg";
import carousel3 from "../../assets/home/carousel3.jpg";
import carousel4 from "../../assets/home/carousel4.jpg";
import carousel5 from "../../assets/home/carousel5.jpg";
import carousel6 from "../../assets/home/carousel6.jpg";
import carousel7 from "../../assets/home/carousel7.jpg";
import carousel8 from "../../assets/home/carousel8.jpg";
import Button from "../Button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
    const [carouselIndex, setCarouselIndex] = useState(2);
    const navigate = useNavigate();

    const slideShowData = useMemo(() => [
        carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel6, carousel7, carousel8
    ], []); // Empty array means it will only be calculated once
    

    useEffect(()=>{
        
        const interval = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % slideShowData.length);
        },3000);

        return () => clearInterval(interval);
    }, [slideShowData.length]);

    const handleNavigateLeft = () => {
        if(carouselIndex > 0){
        setCarouselIndex(carouselIndex - 1);
       } 
    };
    const handleNavigateRight = () => {
        if(carouselIndex < slideShowData.length - 1){
        setCarouselIndex(carouselIndex + 1);
       } 
    };
    const handleRedirectionToShop = () => {
        navigate("/our-products")
    }
  return (
    <section className="relative h-[87dvh] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 p-12">
        {/* image background */}
        <AnimatePresence>
            {slideShowData.map((image, index) => (
                <motion.img 
                    key={index}
                    initial={{opacity:0}}
                    animate={{ opacity: index === carouselIndex ? 1 : 0 }}
                    exit={{opacity:0}}
                    transition={{duration:1,ease:"easeIn"}}
                    src={image} 
                    className="w-full h-full absolute top-0 left-0 object-cover" 
                    alt="product banner" 
                    loading="lazy" 
                />
            ))}
        </AnimatePresence>
        {/* dark background */}
        <div className="bg-black bg-opacity-30 w-full h-full absolute top-0 left-0"></div>
        {/* navigation buttons */}
        <div className="absolute top-1/2 left-0 flex justify-between w-full px-1">
            <div className="p-1 rounded-full bg-white shadow-sm cursor-pointer" onClick={handleNavigateLeft}><MdKeyboardArrowLeft size={24} /></div>
            <div className="p-1 rounded-full bg-white shadow-sm cursor-pointer" onClick={handleNavigateRight}><MdKeyboardArrowRight size={24} /></div>
        </div>

        {/* Header text */}
        <div className="w-full md:max-w-[50%] relative z-10">
            <h1 className="text-white text-[2.5rem] sm:text-[3rem] font-mont font-bold">Discover the Essence of Quality Baking</h1>
            <h3 className="text-white text-base font-poppins font-normal md:max-w-[80%] my-4">From premium milk flavors to exquisite bakery materials, explore our NAFDAC-approved range crafted for perfection.</h3>
            <Button action={handleRedirectionToShop} title="Learn More" arrow={true} />
        </div>
        {/* image carousel */}
        {/* <div className="relative overflow-hidden w-full max-w-[24.75rem] h-[24.75rem] rounded-[0.625rem]">
            <img 
               src={slideShowData[carouselIndex]} 
               className="w-full h-full object-cover"
               loading="lazy" 
               alt="sampees product"
            />   
        </div> */}
    </section>
    // <section className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 p-12">
    //     {/* Rectangular background */}
    //     <div className="absolute top-0 left-0 w-full h-full">
    //         <img src={rectangle} className="w-full h-full" alt="rectangle background" />
    //     </div>
    //     {/* Header text */}
    //     <div className="md:max-w-[50%] relative z-10">
    //         <h1 className="text-[2.5rem] sm:text-[3rem] font-mont font-bold">Discover the Essence of Quality Baking</h1>
    //         <h3 className="text-base font-poppins font-normal md:max-w-[80%] my-4">From premium milk flavors to exquisite bakery materials, explore our NAFDAC-approved range crafted for perfection.</h3>
    //         <Button action={handleRedirectionToShop} title="Learn More" arrow={true} />
    //     </div>
    //     {/* image carousel */}
    //     <div className="relative overflow-hidden w-full max-w-[24.75rem] h-[24.75rem] rounded-[0.625rem]">
    //         <img 
    //            src={slideShowData[carouselIndex]} 
    //            className="w-full h-full object-cover"
    //            loading="lazy" 
    //            alt="sampees product"
    //         />   
    //         <div className="absolute top-1/2 left-0 flex justify-between w-full px-1">
    //             <div className="p-1 rounded-full bg-white shadow-sm cursor-pointer" onClick={handleNavigateLeft}><MdKeyboardArrowLeft size={24} /></div>
    //             <div className="p-1 rounded-full bg-white shadow-sm cursor-pointer" onClick={handleNavigateRight}><MdKeyboardArrowRight size={24} /></div>
    //         </div>
    //     </div>
    // </section>
  )
}

export default Hero