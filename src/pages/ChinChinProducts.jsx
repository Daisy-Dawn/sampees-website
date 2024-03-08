import React from 'react'
import {chinchin} from '../assets'
import AboutButton from '../components/AboutButton'
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product';

const ChinChinProducts = () => {
  const navigate = useNavigate();

  const handleNavigationToContact = ()=>{
    navigate("/contact-us");
  }

  const flavours = [
    {
      header:"CHOPRITE CHIN-CHIN",
      description:"Satisfy your cravings with our Choprite Chin-Chin, a beloved treat crafted with care and expertise by Sampees Global Resources Limited. Made from a blend of premium ingredients including flour, sugar, butter, and a hint of spice, our Choprite Chin-Chin Snack offers a delightful combination of sweetness and crunchiness in every bite. Whether you're enjoying it as a quick pick-me-up or sharing it with friends and family, its irresistible flavor and crispy texture will leave you craving more. Perfect for any occasion  ",
      grams:{
        small:"60g"
      },
      productImages:{
        small: chinchin
      }
    },
  ];

  return (
    <>
    {flavours.map((flavour, index)=> (
        <Product 
          key={index} 
          header={flavour.header} 
          description={flavour.description} 
          gramsBig={flavour.grams.big}
          gramsSmall={flavour.grams.small} 
          productImageBig={flavour.productImages.big} 
          productImageSmall={flavour.productImages.small} 
        />
      ))}
    </>
  )
  }

export default ChinChinProducts
