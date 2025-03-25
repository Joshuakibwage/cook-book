import React, { useState } from 'react'
import { motion , AnimatePresence} from "framer-motion"

const FlyOut = ({children, href, FlyoutContent}) => {


    const [open, setOpen] = useState(false)
    // only show FlyoutContent if there is content to show
    const showFlyOut = open && FlyoutContent;

  return (
    <div 
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
    className="relative w-fit h-fit"
    >
      <a href="#" className="relative text-white">
        {children}
        <span 
        style={{
            transform: showFlyOut ? "scaleX(1)" : "scaleX(0)"
        }}
        className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-green-500 transition-transform ease-out duration-300">

        </span>
      </a>
    <AnimatePresence>
    {
        showFlyOut && 
        <motion.div 
        initial={{opacity: 0, y: 15}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 15}}
        transition={{duration: 0.3, ease: "easeOut"}}
        className="absolute top-12 w-[20rem] rounded-md bg-gray-200 shadow-2xl shadow-black ">
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <FlyoutContent />
        </motion.div>
      }
    </AnimatePresence>
    </div>

  )
}

 

export default FlyOut
