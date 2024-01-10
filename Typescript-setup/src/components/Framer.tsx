
import {motion} from 'framer-motion'
import { useState } from 'react'


const Home = () => {
  const [open, setOpen] = useState(false)
  const variants = {
    hidden: {opacity: 0},
    //visible: {opacity: 1, x:-400, transition: { type:"spring", stiffness:20000, damping:20000}},
    visible:{opacity:1, x:100,}
  }
  const items: string[] = ["php", "python", "java", "JavaScript"]
  return (
      <div className=" pt-20 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
          <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center 
          h-full px-4 md:flex-row">
             
             <motion.span  
            variants={variants}
            //initial='hidden'
            //animate='visible'
            //animate={open? "visible":"hidden"}
             className='w-40 h-40 bg-white' ></motion.span>
             <button onClick={()=>setOpen(!open)}>Click to animate</button>
          </div>
      </div>
  )
}

export default Home;