import { useEffect, useRef } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Surface from "../animation/Surface";
import {motion, useTransform, useScroll, useAnimate, useInView, stagger} from "framer-motion";
import {chef3} from '../../assets'

const About = () => {
  const ref = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {once:"true"});

  const {scrollYProgress} = useScroll({
      target:ref,
      offset:["0 1", "0.6 1"],
  });
  const opacityProgress = useTransform(scrollYProgress, [0,1],[0.4,1]);
  const scaleProgress = useTransform(scrollYProgress, [0,1],[0.9,1]);

  useEffect(()=>{
    if(isInView){
      animate("div", {opacity:1, y:0}, {duration:0.4, delay: stagger(0.2)})
    }
  },[animate, isInView]);
  return (
    
      <section className="relative flex flex-col !items-center justify-center w-full h-[40rem] p-10 md:p-12 mt-24 z-20">
        
            {/* image background */}
            <img 
                src={chef3} 
                className="absolute w-full h-full object-none top-0 left-0 -z-10"
                alt="linear background" 
                loading="lazy"
            />
            {/* dark background */}
            <div className="bg-black bg-opacity-30 w-full h-full absolute top-0 left-0 -z-10"></div>
            {/* About content */}
            <motion.div 
              ref={ref} 
              style={{
                scale:scaleProgress,
                opacity:opacityProgress
              }} 
              className="bg-white bg-opacity-[0.72] backdrop:blur-sm md:w-[80%] p-8 rounded-[0.625rem] flex flex-col justify-center items-center"
            >
              <Surface>
                <h2 className="text-[1.6rem] sm:text-[2.5rem] font-semibold font-mont">About Us</h2>
              </Surface>
              <Surface>
                <p className="lg:w-[60%] text-center mt-4 font-poppins text-base leading-6">
                    At Sampees Global Resources Limited, We Are Passionate About Inspiring 
                    Creativity And Elevating Your Baked Goods And Confections With Our 
                    Premium Flavor Powders. We Believe That Every Detail, From The Finest 
                    Ingredients To Expert Blending, Contributes To The Extraordinary Taste 
                    Experience.
                </p>   
              </Surface>
              <div ref={scope} className="flex gap-8 mt-8 overflow-hidden relative z-10">
                  <motion.div initial={{opacity:0, y:40}} className="bg-[#3b5998] p-1 text-white rounded-full cursor-pointer">
                  <a href="https://www.facebook.com/profile.php?id=61557285863744"><FaFacebook size={16}/></a>
                  </motion.div>
                  <motion.div initial={{opacity:0, y:40}} className="bg-[#25D366] p-1 text-white rounded-full cursor-pointer">
                  <a href="https://wa.link/4kb7e2"><FaWhatsapp size={16}/></a>
                  </motion.div>
              </div> 
            </motion.div>
      </section>
    
  )
}

export default About;