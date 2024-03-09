import Button from "../Button"
import { useNavigate } from "react-router-dom";
import AboutButton from "../AboutButton";


const FeaturedComponent = ({image, header, body}) => {
    const navigate = useNavigate();
    const handleNavigationToProductPage = ()=>{
        navigate("/our-products");
    }
  return (
    <div className="bg-bark bg-opacity-[0.25] w-full max-w-[20rem] p-4 flex flex-col items-center rounded-[0.625rem]">
        <div className="w-[14.875rem] h-[12.875rem] p-2 bg-bark bg-opacity-[0.4] rounded-[0.625rem] overflow-hidden mb-2">
            <img 
                src={image}
                className="w-full h-full object-cover"
                alt="product" 
                loading="lazy"
            />
        </div>
        <h4 className="min-h-[2rem] text-lg font-semibold font-mont capitalize text-center mt-2">{header}</h4>
        <p className="text-base font-normal text-black font-poppins my-2 text-center">{body}</p>
        <div className="text-center">
        <AboutButton action={handleNavigationToProductPage} title="View More"  color='white' border="none" hover='white'
              bgHover='#FED5D9' bg='#7E212C' />
            {/* <Button title="View More" action={handleNavigationToProductPage} /> */}
        </div>
    </div>
  )
}

export default FeaturedComponent;