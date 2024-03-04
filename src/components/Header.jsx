import {useState}  from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineArrowOutward } from "react-icons/md";
import { logo } from "../assets";


const Header = () => {
    const [revealNav, setRevealNav] = useState(false);
    const navLinks = [
        {
            title:"Home",
            anchor:"/"
        },
        {
            title:"About Us",
            anchor:"/about-us"
        },
        {
            title:"Our Products",
            anchor:"/our-products"
        },
        {
            title:"Contact Us",
            anchor:"/contact-us"
        },
    ]

    // header-bg
  return (
    <nav className={`w-full h-[13dvh] sticky top-0 left-0 z-50 bg-[#F8F9FA]  shadow-sm transition-all duration-300 overflow-x-clip`}>
      <div className="flex justify-between items-center h-full mx-12">
          <div className="w-16 h-auto">
              <a href="/">
                {/* LOGO */}
                  <img src={logo} className="w-full h-auto object-cover" alt="brand logo" />
              </a>
          </div>

          {/* desktop nav */}
              <ul className=" hidden md:flex md:gap-8">
                  {navLinks.map(link => (
                      <li 
                          key={link.title} 
                          className={`font-mont font-medium text-[#77808B] text-sm lg:text-base cursor-pointer`}
                      ><NavLink to={link.anchor}>{link.title}</NavLink></li>
                  ))}
              </ul>
              <div className="hidden md:block">
                  <Button title="Get Quote" />    
              </div>
          {/* desktop nav */}

          {/* mobile nav */}
          <div 
              style={revealNav ? {transform:"translateX(0)"} : {transform:"translateX(100%)"}}
              className="md:hidden flex flex-col gap-10 justify-center absolute top-0 right-0 transition-all duration-300 bg-white w-1/2 h-dvh rounded-l-[0.625rem]">
              <ul className="flex flex-col items-center gap-8">
                  {navLinks.map(link => (
                      <li key={link.title} className="font-header text-[#77808B] text-xl cursor-pointer">
                        <a href={link.anchor} className="flex items-center gap-1 group">
                            {link.title} 
                            <div className="group-hover:translate-x-1 group-hover:-translate-y-1  transform transition-all duration-300"><MdOutlineArrowOutward size={12} /></div>
                        </a>
                    </li>
                  ))}
              </ul>
              <div className="mx-auto">
                  <Button title="Get Quote" />
              </div>

              {/* button to hide mobile nav */}
              <div onClick={()=> setRevealNav(false)} className="absolute top-5 left-5 cursor-pointer text-[#77808B]">
                  <RxCross2 size={24} />
              </div>
          </div>
          <div onClick={()=> setRevealNav(true)} className="md:hidden cursor-pointer">
              <HiMiniBars3BottomRight size={30} className="text-black" />
          </div>
          {/* mobile nav */}
      </div>
    </nav>
  )
}

export default Header;
