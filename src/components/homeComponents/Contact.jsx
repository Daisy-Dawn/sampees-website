import { useNavigate } from "react-router";
import hamburger from "../../assets/home/hamburger1.jpg";
import Button from "../Button";
import AboutButton from "../AboutButton";
import ScrollSurface from "../animation/ScrollSurface";

const Contact = () => {
    const navigate = useNavigate();

    const handleNavigationToContact = ()=>{
        navigate("/contact-us");
    }
  return (
    <section className="relative flex justify-center p-10 md:p-[6rem] mt-24 z-20">
        {/* background image */}
        <img 
            src={hamburger} 
            className="absolute w-full h-full object-cover top-0  left-0  -z-10"
            alt="hamburger" 
            loading="lazy"
        />
        {/* dark background */}
        <div className="bg-bark bg-opacity-30 w-full h-full absolute top-0 left-0 -z-10"></div>

        {/* cta container */}
        <ScrollSurface>
            <div className="relative z-10 bg-white bg-opacity-[0.72] backdrop:blur-sm md:w-[80%] p-8 rounded-[0.625rem] flex flex-col items-start xl:flex-row md:items-center justify-between sm:gap-4 gap-2">
                <div className="md:max-w-[75%]">
                        <h3 className="text-[1.8rem] md:text-[2rem] font-semibold font-mont text-center xl:text-start mb-2">Taste the Difference</h3>
                        <p className="text-base font-normal font-poppins text-center xl:text-start">Discover our exquisite range of bakery essentials. Contact us now to place your order and elevate your culinary creations.</p>
                </div>
                <div className="self-center">
                <AboutButton title="Order Now" arrow={true} action={handleNavigationToContact} color='white' border="none" hover='white'
              bgHover='#FED5D9' bg='#7E212C' />
                </div>
            </div>
        {/* </div> */}
        </ScrollSurface>
    </section>
  )
}

export default Contact