import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Surface = ({children, justify = "center"}) => {
    const ref = useRef(null); //get reference of element to be animated
    const isInView  = useInView(ref,{once:true, amount:0.2}); //check when referenced element is in view: returns boolean value
    const control = useAnimation(); //control to kickstart animation

    useEffect(()=>{
        if(isInView){
            control.start("surface");
        }
    },[isInView, control])
    
    const variants = {
        hidden:{
            opacity:0,
            y:40
        },
        surface:{
            opacity:1,
            y:0
        }
    } 
  return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={control}
            transition={{duration:1.3}}
            className={`flex justify-${justify}`}
        >
            {children}
        </motion.div>
  )
}

export default Surface;