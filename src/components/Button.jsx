import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6'

const Button = ({
  type = 'button',
  title,
  color = 'white',
  bg = '#7e212c',
  arrow = false,
  action
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      className='group flex items-center text-center gap-2 py-[0.55rem] px-6 rounded-[0.625rem] font-mont font-bold text-base cursor-pointer transition-all duration-300'
      style={{
        color: color,
        backgroundColor: bg,
        hover: { backgroundColor: '#322CB5' }
      }}
      onClick={action}
    >
      {title}
      {arrow && (
        <FaArrowRight
          size={18}
          className='mt-1 transform group-hover:translate-x-1 transition-transform duration-300'
        />
      )}
    </motion.button>
  )
}

export default Button
