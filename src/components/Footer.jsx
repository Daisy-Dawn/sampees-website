import { Link } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { logo } from '../assets'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Footer = () => {
  const [email, setEmail] = useState('')

  const onSubmitForm = e => {
    e.preventDefault()
    setEmail('')
    Swal.fire({
      title: 'Congrats!',
      text: 'You have successfully subscribed to our newsletter!',
      icon: 'success'
    })
  }
  const navLinks = [
    {
      title: 'Home',
      anchor: '/'
    },
    {
      title: 'About Us',
      anchor: '/about-us'
    },
    {
      title: 'Our Products',
      anchor: '/our-products'
    },
    {
      title: 'Contact Us',
      anchor: '/contact-us'
    }
  ]

  return (
    <footer className='bg-[#F8F9FA] px-4 sm:px-10 md:px-12 py-12 font-mont'>
      <div className='flex  items-center flex-wrap gap-6'>
        {/* brand group */}
        <div className='flex-[2]'>
          <div>
            <img
              className='w-14 h-auto object-cover'
              src={logo}
              alt='sampee logo'
            />
          </div>
          <h3 className='text-base text-[#77808B] my-4'>
            Sampees Global Resources Limited, a distinguished entity in the
            bakery and confectionery sector, is officially registered with the
            Corporate Affairs Commission (CAC).
          </h3>
          
        </div>

        {/* contact group */}
        <div className='flex-[1] flex flex-col gap-4'>
          <h3 className='text-[#7e212c] font-bold'>Get In Touch</h3>
          <div className='flex items-center gap-2'>
            <div className='text-[#7e212c]'>
              <FaLocationDot size={16} />
            </div>
            <p className='text-base w-full text-[#77808B]'>
              Block D Shop 8 Almagamated Bakery Int&#39;l Market, Ogidi, Anambra
              State
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <div className='text-[#7e212c]'>
              <MdEmail size={16} />
            </div>
            <p className='text-base w-full text-[#77808B]'>
              samchoprite@gmail.com
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <div className='text-[#7e212c]'>
              <FaPhoneAlt size={16} />
            </div>
            <p className='text-base w-full text-[#77808B]'>07026305228</p>
          </div>
        </div>

        {/* socials group */}
        <div className='flex-[1] flex flex-col gap-4'>
          {/* social icons */}
          <div className='flex items-center gap-4'>
            <div className='bg-[#7e212c] hover:bg-black p-1 transition-all duration-300 text-white rounded-full cursor-pointer'>
              <a href='https://www.facebook.com/profile.php?id=61557285863744'>
                <FaFacebook size={16} />
              </a>
            </div>
            <div className='bg-[#7e212c] hover:bg-black p-1 transition-all duration-300 text-white rounded-full cursor-pointer'>
              <a href='https://wa.link/4kb7e2'>
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
          <p className='text-[#77808B] text-base'>
            Follow us on social media for the latest updates, offers, and sweet
            inspirations from our bakery to your table.
          </p>
        </div>

        {/* website links */}
        <div className='flex-[1] flex flex-col gap-4'>
          <h3 className='text-[#7e212c] font-bold'>Company</h3>
          {navLinks.map(link => (
            <Link
              key={link.title}
              to={link.anchor}
              className='text-[#77808B] text-base flex items-center gap-1 group'
            >
              {link.title}
              <div className='group-hover:translate-x-1 group-hover:-translate-y-1  transform transition-all duration-300'>
                <MdOutlineArrowOutward size={12} />
              </div>
            </Link>
          ))}
        </div>

        {/* newsletter group */}
        <div className='flex-[1] flex flex-col gap-4'>
          <h3 className='text-[#7e212c] font-bold'>Join our Newsletter</h3>
          <form onSubmit={onSubmitForm} className='flex flex-col gap-3'>
            <label htmlFor='email' className='text-base text-[#77808B]'>
              Your Email
            </label>
            <input
              className='p-2 rounded-[0.625rem] border border-solid border-[#7e212c] outline-none placeholder:text-sm text-sm'
              placeholder='johndoe@mail.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              type='email'
              name='email'
              id='email'
            />
            <button
              type='submit'
              className='group hover:bg-bark text-center gap-4 bg-[#7e212c] text-white py-[0.55rem] px-6 rounded-[0.625rem] font-mont font-bold text-base transition-all duration-300'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
