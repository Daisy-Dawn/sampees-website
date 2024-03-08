import { FaArrowRight } from "react-icons/fa6";
import {motion} from 'framer-motion';

const Button = ({type = "button", title, color = "white", hover= 'transparent', bgHover = 'white', bg = "#7e212c", border = 'none', arrow = false, action}) => {
  return (
    <motion.button
        whileTap={{scale:0.98}} 
        type={type}
        className={`group text-${color} hover:text-${hover} bg-${bg} border-[1px] border-${border} flex items-center text-center gap-4 py-[0.8rem] lg:py-[0.8rem] px-[0.8rem] md:px-[1.2rem] lg:px-6 rounded-[0.625rem] font-poppins font-medium text-base transition-all duration-300 relative overflow-hidden z-10 button`}
        style={{ 
          color: color,
          backgroundColor: bg,
          borderColor: border,
          transition: 'color 0.3s, background-color 0.3s',
      }}
      onMouseEnter={(e) => { e.target.style.color = hover; e.target.style.backgroundColor = bgHover; }}
      onMouseLeave={(e) => { e.target.style.color = color; e.target.style.backgroundColor = bg; }}  
        // style={{color:color, backgroundColor:bg, border:border}}
        onClick={action}
    >
        {title} 
        {arrow && <FaArrowRight size={18} className="mt-1 transform group-hover:translate-x-1 transition-transform duration-300" />}
    </motion.button>
    
  )
}

export default Button

