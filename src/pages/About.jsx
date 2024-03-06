import React, { useState } from 'react';
import AboutButton from '../components/AboutButton';
import { useNavigate } from 'react-router';
import {
  CEO,
  faqIcon,
  icon_label,
  machine1,
  machine2,
  machine3,
  machine4,
  nafdac,
  staffs,
  building1
} from '../assets'
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import LazyLoad from 'react-lazy-load'

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 }
}

const About = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleOpen = index => setOpen(prevIndex => (prevIndex === index ? null : index));
  const handleNavigationToProduct = ()=>{
    navigate("/our-products");
  }
  const handleNavigationToContact = ()=>{
    navigate("/contact-us");
  }

  const accordion = [
    {
      question: 'What makes your flavor powders different from others?',
      answer:
        'We prioritize quality and innovation. We use premium ingredients, state-of-the-art equipment, and meticulous processes to ensure exceptional flavor and consistency in every batch. Our products also exceed NAFDAC requirements in Nigeria, demonstrating our commitment to safety and quality.'
    },
    {
      question: 'What are your most popular flavors?',
      answer:
        'We offer a diverse range of flavors, including popular choices like milk, vanilla, banana, and coconut. Additionally, we continuously explore and develop new flavor profiles to cater to evolving preferences.'
    },
    {
      question:
        'Are your flavor powders suitable for both professional and home use?',
      answer:
        "Yes, our flavor powders are designed to meet the needs of both professional chefs and home bakers. Whether you're creating intricate pastries in a commercial kitchen or baking treats for your family at home, our flavor powders are versatile and easy to use."
    },
    {
      question: 'Can I use your flavor powders in different applications?',
      answer:
        'Absolutely! Our versatile flavor powders can be used in various baking and confectionary applications. They are perfect for enhancing cakes, cookies, frostings, fillings, beverages, and more.'
    },
    {
      question: 'Do your flavor powders contain any allergens?',
      answer:
        'We clearly label all allergens on our packaging, making it easy for you to make informed choices. If you have any specific allergen concerns, please refer to the individual product information or contact us directly.'
    },
    {
      question: 'How much flavor powder should I use in my recipe?',
      answer:
        "The recommended amount of flavor powder can vary depending on the specific recipe and desired intensity. We generally provide usage guidelines on our product labels and website, but it's always recommended to adjust the amount to your taste preference."
    },
    {
      question: 'Where can I buy your products?',
      answer:
        'Our products are available through various channels, including our different company sites, select retailers, and distributors. You can visit our website to find a location near you or send a message to purchase directly from the site.'
    },
    {
      question: 'Do you offer any customized flavor solutions?',
      answer:
        'While we currently focus on a curated range of popular flavors, we are always open to exploring potential collaborations for customized flavor development. Please feel free to contact us with your specific inquiries.'
    },
    {
      question: 'Are your flavor powders made from natural ingredients?',
      answer:
        'We strive to use natural ingredients whenever possible, but the specific composition of each flavor powder may vary. But be rest assured, the ingredients are all safe and natural.'
    },
    {
      question: 'How should your flavor powders be stored?',
      answer:
        'Our flavor powders should be stored in a cool, dry place away from direct sunlight. Proper storage helps maintain the freshness and flavor of the powders. We recommend sealing the packaging tightly after each use to prevent moisture and air exposure.'
    },
    {
      question: 'Do you offer bulk ordering options for businesses?',
      answer:
        "Yes, we offer bulk ordering options for businesses looking to purchase larger quantities of our flavor powders. Whether you're a bakery, restaurant, or food manufacturer, we can accommodate your bulk order needs. Please reach out to our sales team using the chat support or directly sending a dm through any of our social handles for more information on pricing and ordering options or come directly to our offline store."
    }
  ]

  return (
    <div className=''>
      {/* HERO */}
      <div className='flex flex-col skeleton about-img'>
        <div className='h-full w-full xl:w-2/3 2xl:w-1/2 px-[1rem] lg:px-[4rem] flex gap-7 flex-col justify-center'>
          <div className='flex items-center gap-[1rem] lg:gap-[2rem]'>
            <div className='w-[0.375rem] h-[6.25rem] border-stroke '></div>
            <h1 className='lg:text-[3rem] md:text-[2rem] text-[1.5rem] font-mont capitalize text-blossom font-semibold leading-[2rem] lg:leading-[3.5rem]'>
              {' '}
              Discover the Artistry Behind Our Bakery & Confectionary Flavor
              Powders{' '}
            </h1>
          </div>
          <h2 className='md:text-[1.2rem] text-[1rem] font-poppins capitalize text-justify text-bark font-normal leading-[25px] lg:leading-[30px]'>
            At Sampees Global Resources Limited, we are passionate about
            inspiring creativity and elevating your baked goods and confections
            with our premium flavor powders. We believe that every detail, from
            the finest ingredients to expert blending, contributes to the
            extraordinary taste experience.
          </h2>

          <div className='flex gap-[2.5rem]'>
            <AboutButton
              title='Buy Products'
              hover='white'
              bgHover='#7E212C'
              color='#321e17'
              bg='#fff'
              action={handleNavigationToProduct}

            />
            <AboutButton
              title='Contact us'
              color='#FFFFFF'
              bg='transparent'
              border='1px solid #FFFFFF'
              hover='#fff'
              action={handleNavigationToContact}
            />
          </div>
        </div>
      </div>

      {/* COMPANY HISTORY */}
      <div className='bg-[#F8F9FA] px-[1rem] lg:px-[3rem] 2xl:px-[9rem] py-[4rem] xl:py-[6rem] 2xl:py-[9rem] grid md:grid-cols-2 grid-cols-1 items-center md:gap-[1.5rem] lg:gap-[3rem] gap-[3rem]'>
        <div className='lg:h-[40rem] md:h-full h-[21rem]'>
          <img
            className='w-full h-full skeleton object-cover'
            src={building1}
            alt=''
          />
        </div>

        <div className='flex gap-[1.7rem] flex-col '>
          <div className='flex gap-[1.5rem] items-center'>
            <img className='skeleton' src={icon_label} alt='' />
            <h2 className='text-bark font-poppins text-[1rem] lg:text-[1.3rem] capitalize font-medium'>
              About us
            </h2>
          </div>

          <h1 className='text-bark font-mont font-semibold capitalize text-[1.5rem] lg:text-[2.19rem]'>
            Our Story: A Journey of Flavor and Innovation
          </h1>
          <h2 className='font-poppins text-[#77808B] text-[1rem] lg:text-[1.1rem] font-medium text-justify'>
            Founded in 2011, Sampees Global Resources began with a passion for
            crafting exceptional bakery and confectionary flavor powders. From
            humble beginnings, our commitment to quality and innovation has
            fueled our journey to become a renowned name in the industry.
            <br />
            <br />
            Over the years, we&#39;ve pushed boundaries, blending tradition with
            modern techniques to create a diverse range of captivating flavors.
            Each milestone, from expanding our product line to pioneering new
            profiles, reflects our dedication to excellence.
            <br />
            <br />
            Driven by a desire to inspire creativity, we&#39;ve forged lasting
            partnerships with chefs around the globe. As we look to the future,
            we remain committed to our founding principles, ensuring every
            product embodies the essence of quality and flavor. Join us as we
            continue to write the next chapter in flavor excellence.
          </h2>
        </div>
      </div>

      {/* MISSION AND VALUES */}
      <div className='bg-[#F8F9F] px-[1rem] 2xl:px-[9rem] lg:px-[3rem] py-[4rem] xl:py-[6rem] 2xl:py-[9rem] grid md:grid-cols-2 grid-cols-1 items-center gap-[3rem]'>
        <div className='flex gap-[1.7rem] flex-col '>
          <div className='flex gap-[1.5rem] items-center'>
            <img className='skeleton' src={icon_label} alt='' />
            <h2 className='text-bark font-poppins text-[1rem] lg:text-[1.3rem] capitalize font-medium'>
              About us
            </h2>
          </div>

          <h1 className='text-bark font-mont font-semibold capitalize text-[1.5rem] lg:text-[2.19rem]'>
            Our Mission and Values:
          </h1>
          <h2 className='font-poppins text-[#77808B] text-[1rem] lg:text-[1.1rem] font-medium text-justify'>
            At Sampees Global Resources Limited, our mission is simple yet
            profound: to elevate culinary experiences through unparalleled
            flavor innovation while upholding the highest standards of quality,
            integrity, and sustainability. Rooted in our passion for culinary
            excellence, our values guide every aspect of our business, shaping
            the way we work and interact with our customers, partners, and
            communities.
            <br />
            <br />
            <span className='text-blossom font-semibold'>Our Mission: </span>
            <br />
            To inspire culinary creativity and delight taste buds worldwide by
            crafting exceptional bakery and confectionary flavor powders that
            exceed expectations and ignite a passion for flavor exploration.
            <br />
            <br />
            Our commitment to excellence is unwavering. We prioritize quality in
            every aspect of our operations, from sourcing the finest ingredients
            to implementing stringent quality control measures. Integrity forms
            the foundation of our relationships, driving us to uphold honesty,
            transparency, and fairness in all interactions. Embracing
            innovation, we continuously push the boundaries of flavor, blending
            tradition with modern techniques to create captivating taste
            experiences that inspire culinary creativity. These values guide us
            as we exceed customer expectations, minimize our environmental
            impact through sustainable practices, foster collaboration and
            creativity within our team, and contribute positively to the
            communities we serve.
          </h2>
        </div>

        <div className=' flex flex-col'>
          <div className='md:h-[23rem] h-[11rem] '>
            <img
              className='w-full h-full skeleton rounded-[10px] border-2 border-white object-cover'
              src={CEO}
              alt=''
            />
          </div>
          <p className='text-blossom font-medium text-[0.8rem] md:text-[1rem] mt-[0.5rem] mb-[1.5rem] 2xl:mb-[1.5rem] md:mb-[4rem] capitalize font-poppins'>
            CEO Sampees Global Resources limited
          </p>
          <div className='md:h-[23rem] h-[11rem] '>
            <img
              className='w-full h-full skeleton rounded-[10px] border-2 border-white object-cover '
              src={staffs}
              alt=''
            />
          </div>
          <p className='text-blossom font-medium text-[0.8rem] md:text-[1rem] mt-[0.5rem] mb-[1.5rem] capitalize font-poppins'>
            Well Trained staffs of Sampees Global Resources limited
          </p>
        </div>
      </div>

      {/* PRODUCTION PROCESS */}
      <div className='bg-[#F8F9FA] header-bg px-[1rem] lg:px-[3rem] 2xl:px-[9rem] py-[4rem] xl:py-[6rem] 2xl:py-[9rem] grid md:grid-cols-2 grid-cols-1 items-center gap-[3rem]'>
        <div className='grid order-2 lg:order-1 grid-cols-2 '>
          <div className='h-[10rem] md:h-[23rem]'>
            <img
              className='w-full h-full skeleton object-cover md:border-[7px] border-4 border-white'
              src={machine1}
              alt=''
            />
          </div>
          <div className='h-[10rem] md:h-[23rem]'>
            <img
              className='w-full h-full object-cover skeleton md:border-[7px] border-4 border-white'
              src={machine2}
              alt=''
            />
          </div>
          <div className='h-[10rem] md:h-[23rem] col-span-2'>
            <img
              className='w-full h-full object-cover skeleton md:border-[7px] border-4 border-white'
              src={machine3}
              alt=''
            />
          </div>
          <div className='h-[10rem] md:h-[23rem]'>
            <img
              className='w-full h-full object-cover skeleton md:border-[7px] border-4 border-white'
              src={machine4}
              alt=''
            />
          </div>
        </div>

        <div className='flex gap-[1.7rem] flex-col '>
          <div className='flex gap-[1.5rem] items-center'>
            <img className='skeleton' src={icon_label} alt='' />
            <h2 className='text-bark font-poppins text-[1rem] lg:text-[1.3rem] capitalize font-medium'>
              About us
            </h2>
          </div>

          <h1 className='text-bark font-mont font-semibold capitalize text-[1.5rem] lg:text-[2.19rem]'>
            Crafting Flavor Excellence: A Look Inside Our Production Process
          </h1>
          <h2 className='font-poppins text-[#77808B] text-[1rem] lg:text-[1.1rem] font-medium text-justify'>
            At Sampees Global Resources Limited, our production process is a
            testament to our commitment to quality, innovation, and excellence.
            From the moment our carefully selected ingredients arrive at our
            state-of-the-art facility, to the final packaging of our flavorful
            creations, every step is meticulously orchestrated to ensure the
            highest standards are met.
            <br />
            <br />
            <span className='text-blossom font-semibold'>
              Ingredient Selection and Preparation:{' '}
            </span>
            <br />
            We meticulously select premium ingredients, ensuring freshness and
            superior flavor for our diverse range of flavor powders.
            <br />
            <br />
            <span className='text-blossom font-semibold'>
              Precision Mixing and Blending:{' '}
            </span>
            <br />
            Our automated blending systems, operated by expert staff, ensure
            precise measurements and consistent mixing, resulting in perfectly
            balanced flavors in every batch.
            <br />
            <br />
            <span className='text-blossom font-semibold'>
              Hygiene and Sanitation:{' '}
            </span>
            <br />
            Impeccable hygiene standards are maintained throughout our
            production process, with strict protocols followed for cleanliness,
            equipment sanitation, and staff hygiene.
            <br />
            <br />
            <span className='text-blossom text-left font-semibold'>
              Quality Assurance and Compliance:{' '}
            </span>
            <br />
            All products exceed NAFDAC requirements and undergo rigorous testing
            to ensure the highest quality reaches customers, ensuring our flavor
            powders consistently meet the highest standards of quality and
            safety.
            <br />
            <br />
            <span className='text-blossom font-semibold'>
              Dedication to Excellence:{' '}
            </span>
            <br />
            This comprehensive process reflects Sampees Global Resources
            Limited's commitment to innovation, consistency, and customer
            satisfaction, setting the standard for flavor in Nigeria and beyond.
            <br />
            <br />
          </h2>
        </div>
      </div>

      {/* Quality Certifications: Ensuring Standards and Compliance */}
      <div className='bg-[#F8F9FA] px-[1rem] 2xl:px-[9rem] lg:px-[3rem] py-[4rem] xl:py-[6rem] grid md:grid-cols-2 grid-cols-1 items-center gap-[3rem]'>
        <div className='flex gap-[1.7rem] flex-col '>
          <div className='flex gap-[1.5rem] items-center'>
            <img className='skeleton' src={icon_label} alt='' />
            <h2 className='text-bark font-poppins text-[1rem] lg:text-[1.3rem] capitalize font-medium'>
              About us
            </h2>
          </div>

          <h1 className='text-bark font-mont font-semibold capitalize text-[1.5rem] lg:text-[2.19rem]'>
            Quality Certifications: Ensuring Standards and Compliance
          </h1>
          <h2 className='font-poppins text-[#77808B] text-[1rem] lg:text-[1.1rem] font-medium text-justify'>
            At Sampees Global Resources Limited, we prioritize quality and
            safety in every aspect of our operations. Our commitment to
            excellence is reflected in our adherence to stringent quality
            certifications, including registration with the National Agency for
            Food and Drug Administration and Control (NAFDAC) in Nigeria.
            <br />
            <br />
            <span className='text-blossom font-semibold'>
              NAFDAC Registration:{' '}
            </span>
            <br />
            We are proudly registered with the National Agency for Food and Drug
            Administration and Control (NAFDAC) in Nigeria. This registration
            signifies that our products have undergone a thorough evaluation and
            meet the agency&#39;s stringent safety and quality standards.
            <br />
            <br />
            <span className='text-blossom font-semibold'>
              Additional Certifications:{' '}
            </span>
            <br />
            We hold other relevant certifications, such as ISO certifications,
            demonstrating our adherence to global quality management standards
            and our dedication to continuous improvement.
            <br />
            <br />
            <span className='text-blossom font-semibold'>
              Continuous Improvement:{' '}
            </span>
            <br />
            We regularly review and update our certifications to stay current
            with evolving regulations and industry best practices, ensuring our
            flavor powders consistently meet the highest standards of quality
            and safety.
            <br />
            <br />
            <span className='text-blossom font-semibold'>
              Consumer Confidence:{' '}
            </span>
            <br />
            Maintaining rigorous quality certifications instills confidence in
            our customers, assuring them that our products are produced in
            accordance with strict guidelines and meet their expectations for
            quality and safety.
            <br />
            <br />
          </h2>
        </div>

        <div className='flex justify-center sm:h-[20rem] md:h-auto flex-col items-center'>
          <LazyLoad offset={300}>
            <img
              className='w-full h-full object-cover '
              src={nafdac}
              alt=''
              onLoad={() => setImageLoaded(true)} // Set imageLoaded state to true when the image is loaded
            />
          </LazyLoad>
          {!imageLoaded && <div className='skeleton'></div>}{' '}
        </div>
      </div>

      {/* FAQS */}
      <div className='bg-[#F8F9FA] px-[1rem] 2xl:px-[9rem] lg:px-[3rem] pt-[1rem] pb-[5rem] flex flex-col items-center gap-[2rem]'>
        <div className='flex gap-[1.5rem] items-center'>
          <img src={faqIcon} alt='' />
          <h2 className='text-bark font-poppins text-[1rem] lg:text-[1.3rem] capitalize font-medium'>
            FAQ Question
          </h2>
        </div>

        <h1 className='text-bark font-mont font-semibold capitalize mb-[1.5rem] text-[1.5rem] text-center lg:text-left lg:text-[2.19rem]'>
          Frequently asked questions
        </h1>

        <div>
          {accordion.map((list, index) => (
            <Accordion
              className='mb-[15px]'
              key={index}
              open={open === index}
              animate={CUSTOM_ANIMATION}
              icon={
                open === index ? <FaMinus size={16} /> : <FaPlus size={16} />
              }
            >
              <AccordionHeader
                className='text-blossom lg:text-[20px] font-poppins md:text-[20px] text-[16px] font-medium  hover:text-pink-300'
                onClick={() => handleOpen(index)}
              >
                {list.question}
              </AccordionHeader>
              <AccordionBody className='text-[#77808B] font-poppins lg:text-[16px] md:text-[14px] text-[12px]  '>
                {list.answer}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
