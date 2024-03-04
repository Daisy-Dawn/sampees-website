import { FaArrowRight } from "react-icons/fa6";

const Button = ({type = "button", title, color = "white", bg = "#7e212c", border = 'none', arrow = false, action}) => {
  return (
    <button 
        type={type}
        className={`group flex items-center text-center gap-4 py-[0.8rem] lg:py-[0.8rem] px-[0.8rem] md:px-[1.2rem] lg:px-6 rounded-[0.625rem] font-poppins font-medium text-base transition-all duration-300 hover:bg-slate-400`}
        style={{color:color, backgroundColor:bg, border:border}}
        onClick={action}
    >
        {title} 
        {arrow && <FaArrowRight size={18} className="mt-1 transform group-hover:translate-x-1 transition-transform duration-300" />}
    </button>
  )
}

export default Button







// import React from 'react'

// const AboutButton = ({title, color = "white",  border = 'none', bg = "#7e212c", hover = "#7e212c", arrow = false}) => {
//   return (
//     <button 
//         type="button"
//         className={`group flex items-center text-center gap-4 py-[0.8rem] lg:py-[0.8rem] px-[0.8rem] md:px-[1.2rem] lg:px-6 rounded-[0.625rem] font-poppins font-medium text-base transition-all duration-300 hover:bg-slate-400`}
//         style={{color:color, backgroundColor:bg , border:border}}
//     >
//         {title} 
//         {arrow && <FaArrowRight size={18} className="mt-1 transform group-hover:translate-x-1 transition-transform duration-300" />}
//     </button>
//   )
// }

// export default AboutButton
