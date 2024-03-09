import nafdac from "../../assets/about/nafdac.png";
import vector1 from "../../assets/home/Vector.svg";
import vector2 from "../../assets/home/Vector1.svg";
import ScrollSurface from "../animation/ScrollSurface";
import Surface from "../animation/Surface";
import {motion} from "framer-motion";
import { corn2, machine41 } from '../../assets';

const QualityAssurance = () => {
  return (
    <section className="relative flex flex-col items-center p-10 md:p-12 mt-24">
        {/* first blob vector */}
        <img src={vector2} className="opacity-50 w-[4rem] sm:w-[8rem] right-0 top-0 absolute" alt="blob2" />
        {/* Heading */}
        <Surface>
          <h2 className="w-full md:max-w-[70%] text-[1.6rem] sm:text-[2.5rem] font-bold font-mont">Embarking on a Journey of Excellence: Delve Into the Core Commitments That <span className="text-[#7e212c]">Define Our Craft</span></h2>
        </Surface>
        {/* second blob vector */}
        <img src={vector1} className="opacity-50w-full w-[4rem] sm:w-[8rem] left-0 top-[10%] md:top-[10%] absolute" alt="blob" />
        {/* quality assurance points group */}
        <div className="relative flex flex-col w-full gap-36 lg:gap-[12rem] mt-60 sm:mt-80">
          

          {/* card1 */}
          <ScrollSurface>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <div className="flex gap-1 md:max-w-[60%]">
                  <motion.span initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}} viewport={{once:true}}  className="text-[1rem] font-semibold font-poppins text-[#7e212c] mt-2">01</motion.span>
                  <motion.div initial={{opacity:0.6}} whileInView={{opacity:1}} transition={{duration:2}} >
                    <motion.h3 initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}}  className="lg:text-[1.8rem] text-[1.5rem] font-bold font-mont mb-2">Premium Ingredients, Superior Flavors</motion.h3>
                    <motion.p initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}}   className="lg:text-[1.2rem] text-[1rem] font-poppins font-normal">At the heart of our products lies our commitment to using only premium, 
                        carefully selected ingredients. This ensures each flavor powder not only 
                        meets but exceeds expectations, delivering unmatched freshness and taste
                    </motion.p>    
                  </motion.div>
              </div>
              <img src={corn2} className="w-full md:max-w-[40%]  h-[19rem] object-cover" alt="baking powder poured into a bowl" />
            </div>
          </ScrollSurface>

          {/* card2 */}
          <ScrollSurface>
            <motion.div initial={{opacity:0.6}} whileInView={{opacity:1}} transition={{duration:2}} className="relative flex gap-1 z-30 md:max-w-[60%] md:self-center">
              {/* nafdac image */}
            <img 
              src={nafdac} 
              className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-[50%] w-full max-w-[24rem] -z-10 opacity-[0.2] xl:opacity-[0.5]"
              alt="nafdac logo" 
              loading="lazy"
            />
                <motion.span initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}} viewport={{once:true}} className="text-[1rem] font-semibold font-poppins text-[#7e212c] mt-2">02</motion.span>
                <div >
                  <motion.h3 initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}}  className="lg:text-[1.8rem] text-[1.5rem] font-bold font-mont mb-2">Beyond Standards, Beyond Expectations</motion.h3>
                  <motion.p initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}}  className="lg:text-[1.2rem] text-[1rem] font-poppins font-normal">Our flavor powders surpass NAFDAC requirements, undergoing extensive
                    quality assurance tests. We promise not just to meet but to exceed the highest standards of quality and safety, ensuring 
                    satisfaction and trust.
                  </motion.p>    
                </div>
            </motion.div>
          </ScrollSurface>

          {/* card3 */}
          <ScrollSurface>
            <motion.div initial={{opacity:0.6}} whileInView={{opacity:1}} transition={{duration:2}} className="flex flex-col md:flex-row items-center justify-between gap-2">
              <div className="flex gap-1 md:max-w-[50%] ">
                  <motion.span initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}} viewport={{once:true}}  className="text-[1rem] font-semibold font-poppins text-[#7e212c] mt-2">03</motion.span>
                  <div >
                    <motion.h3 initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}}  className="lg:text-[1.8rem] text-[1.5rem] font-bold font-mont mb-2">Consistency Through Innovation</motion.h3>
                    <motion.p initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} viewport={{once:true}}  className="lg:text-[1.2rem] text-[1rem] font-poppins font-normal">Leveraging state-of-the-art automated blending systems and the 
                      expertise of our team, we guarantee precise, consistent mixing for balanced flavors every time. Experience the perfect 
                      harmony of taste in each batch.
                    </motion.p>    
                  </div>
              </div>
              <img src={machine41} className="w-full md:max-w-[40%]  h-full object-cover" alt="baking powder poured into a bowl" />
            </motion.div>
          </ScrollSurface>
        </div>
    </section>
  )
}

export default QualityAssurance