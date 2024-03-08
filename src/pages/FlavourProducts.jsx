import { danobig, danosmall, } from '../assets';
import { ProductWithIngredients } from '../components/Product';

const FlavourProducts = () => {
  const flavours = [
    {
      header:"DE-SUNNEX MIX MILK FLAVOUR POWDER",
      description:"Indulge in the rich and comforting taste of our De-Sunnex Mix Milk Flavor Powder. Made with a blend of premium ingredients including powdered milk, granulated sugar, and milk flour, this flavor powder is a versatile addition to your culinary creations. Our FlavourPowder captures the essence of creamy, delicious milk in a convenient powder form.",
      ingredients:"Corn Starch, Powdered Milk, Milk Flavour, Butyric Acid, Vanillin",
      grams:{
        big:"500g",
        small:"100g"
      },
      productImages:{
        big: danobig,
        small: danosmall
      }
    },
    {
      header:"PEE-SABINA VANILLA FLAVOUR POWDER",
      description:"Indulge in the rich and comforting taste of our De-Sunnex Mix Milk Flavor Powder. Made with a blend of premium ingredients including powdered milk, granulated sugar, and milk flour, this flavor powder is a versatile addition to your culinary creations. Our FlavourPowder captures the essence of creamy, delicious milk in a convenient powder form.",
      ingredients:"Corn Starch, Powdered Milk, Vanilla Flavour, Butyric Acid, Vanillin",
      grams:{
        big:"500g",
        small:"100g"
      },
      productImages:{
        big: danobig,
        small: danosmall
      }
    },
    {
      header:"DE-SUNNEX MIX BANANA FLAVOUR POWDER",
      description:"Immerse yourself in the tropical delight of our De-Sunnex Mix Banana Flavor Powder. Made with premium ingredients, including ripe banana essence, sugar, and natural flavorings, this powder encapsulates the luscious sweetness and distinctive aroma of freshly-picked bananas. Whether you're creating banana-flavored cakes, shakes, or ice creams, this powder promises to infuse your creations with irresistible banana goodness.{' '}",
      ingredients:"Corn Starch, Powdered Milk, Banana Flavour, Butyric Acid, Vanillin",
      grams:{
        big:"500g",
        small:"100g"
      },
      productImages:{
        big: danobig,
        small: danosmall
      }
    },
    {
      header:"DE-SUNNEX MIX COCONUT FLAVOUR POWDER",
      description:"Embark on a journey to the tropics with our De-Sunnex Mix Coconut Flavor Powder. Crafted with the finest ingredients, including coconut extract, sugar, and natural flavorings, this powder captures the essence of paradise in every spoonful. Whether you're adding it to smoothies, desserts, or baked goods, its rich coconut flavor will evoke memories of tropical bliss.{' '}",
      ingredients:"Corn Starch, Powdered Milk, Coconut Flavour, Butyric Acid, Vanillin",
      grams:{
        big:"500g",
        small:"80g"
      },
      productImages:{
        big: danobig,
        small: danosmall
      }
    },
  ];

  return (
    <>
      {flavours.map((flavour, index)=> (
          <ProductWithIngredients 
          key={index} 
          header={flavour.header} 
          description={flavour.description} 
          ingredients={flavour.description}
          gramsBig={flavour.grams.big}
          gramsSmall={flavour.grams.small} 
          productImageBig={flavour.productImages.big} 
          productImageSmall={flavour.productImages.small} 
        />
      ))}
    </>
  )
}

export default FlavourProducts
