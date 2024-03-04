import About from "../components/homeComponents/About"
import Contact from "../components/homeComponents/Contact"
import FeaturedProducts from "../components/homeComponents/FeaturedProducts"
import Hero from "../components/homeComponents/Hero"
import QualityAssurance from "../components/homeComponents/QualityAssurance"
import Testimonials from "../components/homeComponents/Testimonials"


const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <FeaturedProducts />
      <QualityAssurance />
      <Contact />
      <Testimonials />
    </div>
  )
}

export default Home
