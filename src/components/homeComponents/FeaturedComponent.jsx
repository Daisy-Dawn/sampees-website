import Button from "../Button"
import { useNavigate } from "react-router-dom";


const FeaturedComponent = ({image, header, body}) => {
    const navigate = useNavigate();
    const handleNavigationToProductPage = ()=>{
        navigate("/our-products");
    }
  return (
    <div className="bg-[#7e212c] bg-opacity-5 w-full max-w-[16rem] p-4 flex flex-col items-center rounded-[0.625rem]">
        <div className="w-[10.875rem] h-[10.875rem] p-2 bg-[#7e212c] bg-opacity-10 rounded-[0.625rem] overflow-hidden mb-2">
            <img 
                src={image}
                className="w-full h-full object-cover"
                alt="product" 
                loading="lazy"
            />
        </div>
        <h4 className="h-[4rem] text-lg font-normal font-mont capitalize text-center mt-2">{header}</h4>
        <p className="text-base font-normal font-poppins my-2 text-center">{body}</p>
        <div className="text-center">
            <Button title="View More" action={handleNavigationToProductPage} />
        </div>
    </div>
  )
}

export default FeaturedComponent;