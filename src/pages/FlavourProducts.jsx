import {
  bananaFlavour,
  CoconutFlavour,
  milkFlavourBig,
  milkFlavourSmall,
  pineappleFlavour,
  vanillaFlavour,
  milkSmall,
  milksmall2,
  milksmall2bg
} from '../assets'
import ProductWithIngredients from '../components/Product'

const FlavourProducts = () => {
  const flavours = [
    {
      header: 'DE-SUNNEX MIX MILK FLAVOUR POWDER',
      description:
        'Indulge in the rich and comforting taste of our De-Sunnex Mix Milk Flavor Powder. Made with a blend of premium ingredients including powdered milk, granulated sugar, and milk flour, this flavor powder is a versatile addition to your culinary creations. Our FlavourPowder captures the essence of creamy, delicious milk in a convenient powder form.',
      ingredients:
        'Corn Starch, Powdered Milk, Milk Flavour, Butyric Acid',
      grams: {
        big: '500g',
        small: '100g'
      },
      bg: '#F8F9FA',
      productImages: {
        big: milkFlavourBig,
        small: milksmall2bg
      }
    },
    {
      header: 'PEE-SABINA VANILLA FLAVOUR POWDER',
      description:
        'Indulge in the exquisite aroma and delicate sweetness of our Pee-Sabina Vanilla Flavour Powder. Crafted with care using the finest ingredients, this powder adds a touch of sophistication to any dish. Savor the smooth, velvety taste of our Vanilla Flavor Powder, perfect for enhancing desserts, beverages, and baked goods alike. Elevate your culinary creations with the timeless allure of vanilla, creating unforgettable flavors that delight the senses. ',
      ingredients:
        'Corn Starch, Powdered Milk, Vanilla Flavour, Butyric Acid',
      grams: {
        small: '100g'
      },
      bg: '#fff',
      productImages: {
        small: vanillaFlavour
      }
    },
    {
      header: 'DE-SUNNEX MIX BANANA FLAVOUR POWDER',
      description:
        "Immerse yourself in the tropical delight of our De-Sunnex Mix Banana Flavor Powder. Made with premium ingredients, including ripe banana essence, sugar, and natural flavorings, this powder encapsulates the luscious sweetness and distinctive aroma of freshly-picked bananas. This flavour is the most favorite for making custard powders. Whether you're creating banana-flavored cakes, shakes, custard or ice creams, this powder promises to infuse your creations with irresistible banana goodness.",
      ingredients:
        'Corn Starch, Powdered Milk, Banana Flavour, Butyric Acid',
      grams: {
        small: '80g'
      },
      bg: '#F8F9FA',
      productImages: {
        small: bananaFlavour
      }
    },
    {
      header: 'DE-SUNNEX MIX COCONUT FLAVOUR POWDER',
      description:
        "Embark on a journey to the tropics with our De-Sunnex Mix Coconut Flavor Powder. Crafted with the finest ingredients, including coconut extract, sugar, and natural flavorings, this powder captures the essence of paradise in every spoonful. Whether you're adding it to smoothies, desserts, or baked goods, its rich coconut flavor will evoke memories of tropical bliss.",
      ingredients:
        'Corn Starch, Powdered Milk, Coconut Flavour, Butyric Acid',
      grams: {
        small: '80g'
      },
      bg: '#fff',
      productImages: {
        small: CoconutFlavour
      }
    },
    {
      header: 'DE-SUNNEX MIX PINEAPPLE FLAVOUR POWDER',
      description:
        'Indulge in the tropical delight of our Pineapple Flavour Powder, a delicious addition to your culinary adventures. Made from the finest ingredients, our Pineapple Flavour Powder is crafted to perfection to elevate your recipes to new heights.  Whether sprinkled over desserts, blended into smoothies, or used in baking, this powder adds a delightful twist to any recipe.',
      ingredients:
        'Corn Starch, Powdered Milk, Pineapple Flavour, Butyric Acid',
      grams: {
        small: '80g'
      },
      bg: '#F8F9FA',
      productImages: {
        small: pineappleFlavour
      }
    }
  ]

  return (
    <>
      {flavours.map((flavour, index) => (
        <ProductWithIngredients
          key={index}
          bg={flavour.bg}
          header={flavour.header}
          description={flavour.description}
          ingredients={flavour.ingredients}
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
