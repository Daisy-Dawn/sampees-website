import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import instaBg from "../../assets/home/back.png";
import baker3 from "../../assets/home/bakerr3.jpg";

const About = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-[40rem] p-10 md:p-12 mt-24">
          {/* image background */}
          <img 
              src={baker3} 
              className="absolute w-full h-full object-cover top-0 left-0 -z-10"
              alt="linear background" 
              loading="lazy"
          />
          {/* dark background */}
          <div className="bg-black bg-opacity-30 w-full h-full absolute top-0 left-0 -z-10"></div>
          {/* About content */}
          <div className="bg-white bg-opacity-[0.72] backdrop:blur-sm md:w-[80%] p-8 rounded-[0.625rem] flex flex-col items-center">
            <h2 className="text-[1.6rem] sm:text-[2.5rem] font-semibold font-mont">About Us</h2>
            <p className="lg:w-[60%] text-center mt-4 font-poppins text-base leading-6">
                At Sampees Global Resources Limited, We Are Passionate About Inspiring 
                Creativity And Elevating Your Baked Goods And Confections With Our 
                Premium Flavor Powders. We Believe That Every Detail, From The Finest 
                Ingredients To Expert Blending, Contributes To The Extraordinary Taste 
                Experience.
            </p>   
            <div className="flex gap-8 mt-8">
                <div className="bg-[#3b5998] p-1 text-white rounded-full cursor-pointer"><Link to="/"><FaFacebook size={16}/></Link></div>
                <div className="p-1 text-white rounded-full cursor-pointer relative">
                  <img src={instaBg} className="absolute top-0 left-0 w-full h-full -z-10" alt="instagram background color" />
                  <Link to="/"><FaInstagram size={16}/></Link>
                </div>
                <div className="bg-[#55ACEE] p-1 text-white rounded-full cursor-pointer"><Link to="/"><FaTwitter size={16}/></Link></div>
                <div className="bg-[#25D366] p-1 text-white rounded-full cursor-pointer"><Link to="/"><FaWhatsapp size={16}/></Link></div>
            </div> 
          </div>
    </section>
  )
}

export default About