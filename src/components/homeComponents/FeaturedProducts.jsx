import FeaturedComponent from './FeaturedComponent'
import { CoconutFlavour, milkFlavourSmall, bananaFlavour } from '../../assets'
import ScrollSurface from '../animation/ScrollSurface'
import Staggered from '../animation/Staggered'

const FeaturedProducts = () => {
  const products = [
    {
      image: milkFlavourSmall,
      header: 'MILK FLAVOUR POWDER',
      body: '100g and 500g'
    },
    {
      image: bananaFlavour,
      header: 'BANANA FLAVOUR POWDER',
      body: '80g'
    },
    {
      image: CoconutFlavour,
      header: 'COCONUT FLAVOUR POWDER',
      body: '80g'
    }
  ]

  return (
    <ScrollSurface>
      <section className='flex flex-col items-center p-[1.5rem] lg:p-12 mt-24'>
        <h2 className='text-[1.6rem] sm:text-[2.5rem] font-bold font-mont'>
          Featured Products
        </h2>
        <h3 className='md:text-[1.4rem] text-[1.1rem] text-bark font-semibold font-mont text-center mt-4'>
          Handpicked Selections for Unmatched Quality
        </h3>
        <div className='flex flex-col flex-wrap lg:grid-cols-3  sm:grid sm:grid-cols-2 grid-cols-3 gap-4 mt-12'>
          {products.map((product, index) => (
            <Staggered key={index} index={index}>
              <FeaturedComponent
                image={product.image}
                header={product.header}
                body={product.body}
              />
            </Staggered>
          ))}
        </div>
      </section>
    </ScrollSurface>
  )
}

export default FeaturedProducts
