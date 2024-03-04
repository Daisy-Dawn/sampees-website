import TestimonialCard from "./TestimonialCard"


const Testimonials = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-12 py-24">
        <h2 className="text-[1.6rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold font-mont">Testimonials</h2>
        <h3 className="text-base lg:text-[1.7rem] text-blossom font-medium font-mont italic text-center">What our clients are saying</h3>
        <div className="flex gap-8 flex-col sm:items-center md:justify-around flex-wrap md:flex-row mt-4">
            <TestimonialCard image="https://i.pinimg.com/564x/8a/06/9f/8a069fe522876c2067120b71cd8b26b3.jpg" name="Njoku Blessing" profession="Executive Pastry Chef" comment=" Integrating their premium flavors into our dessert menu has elevated our pastry offerings to a whole new level. Our customers can&#39;t get enough. A must-have for any culinary professional aiming for excellence."  />
            <TestimonialCard image="https://i.pinimg.com/564x/97/e6/4e/97e64e91c01ea1be5a9f65cac58c8a4b.jpg" name="Nwokedi Ikemsinachi" profession="Bakery Owner" comment="Their range of baking materials has been a game-changer for my bakery. The quality and consistency of their products have significantly improved our baked goods, resulting in higher customer satisfaction."  />
            <TestimonialCard image="https://i.pinimg.com/564x/02/1f/0c/021f0ce536eece24e569c759bceaeec2.jpg" name="Anyanwu Godwin" profession="Food Product Developer" comment=" In developing new snack lines, their flavors have been instrumental in achieving the unique taste profiles we were aiming for. Their commitment to quality and innovation aligns perfectly with our brand&#39;s values."  />
        </div>

    </div>
  )
}

export default Testimonials