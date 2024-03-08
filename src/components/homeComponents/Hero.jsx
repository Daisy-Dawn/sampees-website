import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {AnimatePresence, motion, useAnimate, stagger, useInView} from "framer-motion";
import carousel1 from "../../assets/home/carousel1.jpg";
import carousel2 from "../../assets/home/carousel2.jpg";
import carousel3 from "../../assets/home/carousel3.jpg";
import carousel4 from "../../assets/home/carousel4.jpg";
import carousel5 from "../../assets/home/carousel5.jpg";
import carousel6 from "../../assets/home/carousel6.jpg";
import carousel7 from "../../assets/home/carousel7.jpg";
import carousel8 from "../../assets/home/carousel8.jpg";
import Button from "../Button";
import AboutButton from "../AboutButton";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import {bread, bread2, meatpie, popcorn, smallchops} from '../../assets'


const Hero = () => {
    const [carouselIndex, setCarouselIndex] = useState(2);
    const navigate = useNavigate();

    // animation
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, {once:"true"});
    useEffect(()=>{
        if(isInView){
            animate("div", {y:0, opacity:1}, {duration: 0.5, delay: stagger(0.3), ease:"easeOut"});
        }
    }, [isInView, animate])


    const slideShowData = useMemo(() => [
        bread, bread2, meatpie, popcorn, smallchops
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
    <section className="relative h-[87dvh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-4 p-10 md:p-12">
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
        <div ref={scope} className="w-full md:max-w-[50%] relative text-center z-10">
            <motion.div initial={{y:40, opacity:0}}>
                <h1 className="overflow-hidden text-white text-[2.2rem] sm:text-[3rem] font-mont font-bold"> Discover the Essence of Quality Baking </h1>
            </motion.div>
            <motion.div initial={{y:40, opacity:0}}>
                <h3 className="text-white text-base mx-auto font-poppins font-normal md:max-w-[80%] my-4">From premium milk flavors to exquisite bakery materials, explore our NAFDAC-approved range crafted for perfection.</h3>
            </motion.div>
            <motion.div initial={{y:40, opacity:0}}>
                <div className="w-fit mx-auto">
                <AboutButton action={handleRedirectionToShop} title="Learn More" arrow={true} color='white' border="none" hover='white'
              bgHover='#FED5D9' bg='#7E212C' />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero