import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import Button from './Button'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { logo } from '../assets'
import AboutButton from '../components/AboutButton'

const Header = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)
  const navigate = useNavigate()
  const [revealNav, setRevealNav] = useState(false)

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])

  const handleNavigationToContactDesktop = () => {
    navigate('/contact-us')
  }

  const handleNavigationToContactMobile = () => {
    navigate('/contact-us')
    setRevealNav(!revealNav)
  }

  const handleNavLinkClick = link => {
    setActiveLink(link)
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
    <nav
      className={`w-full h-[14vh] sticky -top-1 left-0 z-50 bg-[#F8F9FA]  shadow-sm transition-all duration-300 overflow-x-clip`}
    >
      <div className='flex justify-between items-center h-full mx-4 sm:mx-10 md:mx-12'>
        <div className='w-14 h-14'>
          <Link to='/'>
            <img
              src={logo}
              className='w-full h-auto object-cover'
              alt='brand logo'
            />
          </Link>
        </div>

        <ul className=' hidden md:flex md:gap-8'>
          {navLinks.map(link => (
            <li
              key={link.title}
              className={`font-mont ${
                activeLink === link.anchor ? 'text-blossom' : 'text-black'
              } font-semibold  text-sm lg:text-base cursor-pointer`}
            >
              <NavLink
                onClick={() => handleNavLinkClick(link.anchor)}
                to={link.anchor}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='hidden md:block'>
          <AboutButton
            title='Get Quote'
            color='white'
            hover='white'
            bgHover='#FED5D9'
            bg='#7E212C'
            action={handleNavigationToContactDesktop}
          />
        </div>

        <div
          style={
            revealNav
              ? { transform: 'translateX(0)' }
              : { transform: 'translateX(100%)' }
          }
          className='md:hidden flex flex-col gap-10 justify-center absolute top-0 right-0 transition-all duration-300 bg-white w-1/2 h-screen rounded-l-[0.625rem]'
        >
          <ul className='flex flex-col items-center gap-8'>
            {navLinks.map(link => (
              <li
                key={link.title}
                onClick={() => setRevealNav(!revealNav)}
                className={`font-header ${
                  activeLink === link.anchor ? 'text-blossom' : 'text-black'
                } text-xl cursor-pointer`}
              >
                <NavLink
                  onClick={() => handleNavLinkClick(link.anchor)}
                  to={link.anchor}
                  className='flex items-center gap-1 group'
                >
                  {link.title}
                  <div className='group-hover:translate-x-1 group-hover:-translate-y-1  transform transition-all duration-300'>
                    <MdOutlineArrowOutward size={12} />
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='mx-auto'>
            <Button
              title='Get Quote'
              action={handleNavigationToContactMobile}
            />
          </div>

          <div
            onClick={() => setRevealNav(false)}
            className='absolute top-5 left-5 cursor-pointer text-[#77808B]'
          >
            <RxCross2 size={24} />
          </div>
        </div>
        <div
          onClick={() => setRevealNav(true)}
          className='md:hidden cursor-pointer'
        >
          <HiMiniBars3BottomRight size={30} className='text-black' />
        </div>
      </div>
    </nav>
  )
}

export default Header
