import { useState } from "react";
import { useNavigate } from "react-router-dom";
import rectangle from "../../assets/home/Rectangle.svg";
import product1 from "../../assets/home/product1.png";
import product2 from "../../assets/home/product2.png";
import product3 from "../../assets/home/product3.png";
import product4 from "../../assets/home/product4.png";
import Button from "../Button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const navigate = useNavigate();
    const slideShowData = [product1, product2, product3, product4];

    const handleNavigateLeft = () =>{
        if(carouselIndex > 0){
        setCarouselIndex(carouselIndex - 1);
       } 
    };
    const handleNavigateRight = () =>{
        if(carouselIndex < slideShowData.length - 1){
        setCarouselIndex(carouselIndex + 1);
       } 
    };
    const handleRedirectionToShop = ()=>{
        navigate("/our-products")
    }
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 p-12">
        {/* Rectangular background */}
        <div className="absolute top-0 left-0 w-full h-full">
            <img src={rectangle} className="w-full h-full" alt="rectangle background" />
        </div>
        {/* Header text */}
        <div className="md:max-w-[50%] relative z-10">
            <h1 className="text-[2.5rem] sm:text-[3rem] font-mont font-bold">Discover the Essence of Quality Baking</h1>
            <h3 className="text-base font-poppins font-normal md:max-w-[80%] my-4">From premium milk flavors to exquisite bakery materials, explore our NAFDAC-approved range crafted for perfection.</h3>
            <Button action={handleRedirectionToShop} title="Learn More" arrow={true} />
        </div>
        {/* image carousel */}
        <div className="relative overflow-hidden w-full max-w-[24.75rem] h-[24.75rem] rounded-[0.625rem]">
            <img 
               src={slideShowData[carouselIndex]} 
               className="w-full h-full object-cover"
               loading="lazy" 
               alt="sampees product"
            />   
            <div className="absolute top-1/2 left-0 flex justify-between w-full px-1">
                <div className="p-1 rounded-full bg-white shadow-sm cursor-pointer" onClick={handleNavigateLeft}><MdKeyboardArrowLeft size={24} /></div>
                <div className="p-1 rounded-full bg-white shadow-sm cursor-pointer" onClick={handleNavigateRight}><MdKeyboardArrowRight size={24} /></div>
            </div>
        </div>
    </section>
  )
}

export default Hero