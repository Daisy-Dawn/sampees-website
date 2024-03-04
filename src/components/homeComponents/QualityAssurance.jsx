import nafdac from "../../assets/about/nafdac.png";
import vector1 from "../../assets/home/Vector.svg";
import vector2 from "../../assets/home/Vector1.svg";
import ingredient2 from "../../assets/home/ingredients3.png";
import machine from "../../assets/home/machine3.png";

const QualityAssurance = () => {
  return (
    <section className="relative flex flex-col items-center p-12 mt-24">
        {/* first blob vector */}
        <img src={vector2} className="opacity-50w-full max-w-[4rem] right-0 top-0 absolute" alt="blob2" />
        {/* Heading */}
        <h2 className="w-full md:max-w-[70%] text-[1.6rem] sm:text-[2.5rem] font-bold font-mont">Embarking on a Journey of Excellence: Delve Into the Core Commitments That <span className="text-[#7e212c]">Define Our Craft</span></h2>
        {/* second blob vector */}
        <img src={vector1} className="opacity-50w-full max-w-[4rem] left-0 top-[12%] absolute" alt="blob" />
        {/* quality assurance points group */}
        <div className="relative flex flex-col w-full gap-60 mt-80">
          

          {/* card1 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex gap-1 md:max-w-[40%]">
                <span className="text-sm font-semibold font-poppins text-[#7e212c] mt-2">01</span>
                <div >
                  <h3 className="text-[1.6rem] font-bold font-mont mb-2">Premium Ingredients, Superior Flavors</h3>
                  <p className="text-base font-poppins font-normal">At the heart of our products lies our commitment to using only premium, 
                      carefully selected ingredients. This ensures each flavor powder not only 
                      meets but exceeds expectations, delivering unmatched freshness and taste
                  </p>    
                </div>
            </div>
            <img src={ingredient2} className="w-full md:max-w-[40%]  h-[19rem] object-cover" alt="baking powder poured into a bowl" />
          </div>

          {/* card2 */}
          <div className="relative flex gap-1 md:max-w-[60%] md:self-center">
            {/* nafdac image */}
          <img 
            src={nafdac} 
            className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-[50%] w-full max-w-[24rem] -z-10 opacity-10"
            alt="nafdac logo" 
            loading="lazy"
          />
              <span className="text-sm font-semibold font-poppins text-[#7e212c] mt-2">02</span>
              <div >
                <h3 className="text-[1.6rem] font-bold font-mont mb-2">Beyond Standards, Beyond Expectations</h3>
                <p className="text-base font-poppins font-normal">Our flavor powders surpass NAFDAC requirements, undergoing extensive
                  quality assurance tests. We promise not just to meet but to exceed the highest standards of quality and safety, ensuring 
                  satisfaction and trust.
                </p>    
              </div>
          </div>

          {/* card3 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex gap-1 md:max-w-[40%] ">
                <span className="text-sm font-semibold font-poppins text-[#7e212c] mt-2">03</span>
                <div >
                  <h3 className="text-[1.6rem] font-bold font-mont mb-2">Consistency Through Innovation</h3>
                  <p className="text-base font-poppins font-normal">Leveraging state-of-the-art automated blending systems and the 
                    expertise of our team, we guarantee precise, consistent mixing for balanced flavors every time. Experience the perfect 
                    harmony of taste in each batch.
                  </p>    
                </div>
            </div>
            <img src={machine} className="w-full md:max-w-[40%]  h-full object-cover" alt="baking powder poured into a bowl" />
          </div>
        </div>
    </section>
  )
}

export default QualityAssurance