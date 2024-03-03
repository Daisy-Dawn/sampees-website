import cta from "../../assets/home/06.svg";
import Button from "../Button";

const Contact = () => {
  return (
    <section className="relative flex justify-center p-12 mt-24">
        {/* background image */}
        <img 
            src={cta} 
            className="absolute w-full h-full object-cover top-0 left-0 -z-10"
            alt="linear background" 
        />

        {/* cta container */}
        <div className="bg-white md:w-[80%] p-8 rounded-[0.625rem] flex flex-col items-start xl:flex-row md:items-center justify-between sm:gap-4 gap-2">
            <div className="md:max-w-[75%]">
                <h3 className="text-[1.8rem] md:text-[2rem] font-semibold font-mont text-center xl:text-start mb-2">Taste the Difference</h3>
                <p className="text-base font-normal font-poppins text-center xl:text-start">Discover our exquisite range of bakery essentials. Contact us now to place your order and elevate your culinary creations.</p>
            </div>
            <div className="self-center">
                <Button title="Order Now" arrow={true} action={()=> window.open('https://wa.me/2348092694135', '_blank')}/>
            </div>
        </div>
    </section>
  )
}

export default Contact