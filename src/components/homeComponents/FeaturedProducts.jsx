import FeaturedComponent from "./FeaturedComponent"
import product1 from "../../assets/home/product1.png";
import product2 from "../../assets/home/product2.png";
import product3 from "../../assets/home/product3.png";


const FeaturedProducts = () => {
  return (
    <section className="flex flex-col items-center p-[1.5rem] lg:p-12 mt-24">
        <h2 className="text-[1.6rem] sm:text-[2.5rem] font-semibold font-mont">Featured Products</h2>
        <h3 className="text-base font-medium font-mont text-center mt-4">Handpicked Selections for Unmatched Quality</h3>

        <div className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row gap-4 mt-12">
            <FeaturedComponent image={product1} header="MILK FLAVOUR POWDER" body="100g and 500g" />
            <FeaturedComponent image={product3} header="BANANA FLAVOUR" body="100g and 500g" />
            <FeaturedComponent image={product2} header="VANILLA FLAVOUR POWDER" body="100g and 500g" />
        </div>
    </section>
  )
}

export default FeaturedProducts