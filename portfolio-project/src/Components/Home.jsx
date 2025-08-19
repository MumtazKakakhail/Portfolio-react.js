import React from 'react'
import "../Components/Home.css"
import heroImage from "./images/img1.png"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Typewriter } from './Typewriter'
function Home() {
  return (
//     <div id='home' className='Hero-section'>

//       <div className='Hero'>
//         <Typewriter text={"Hello"} />
//         <Typewriter text={"I'm Mumtaz Wali"} />
//         <Typewriter text={"Frontend Developer"} />
//         <button><a href="">My resume</a></button>
//       </div>
//       {/* <div className="Hero-button">
//             </div> */}
//       <div className='Hero-img'>
//         <img src={heroImage} alt="Mumtaz Wali"/>
//       </div>
//     </div>
 <div id='home' className='Hero-section'>
      <div className='Hero'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typewriter text={"Hello"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Typewriter text={"I'm Mumtaz Wali"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <Typewriter text={"Frontend Developer"} />
        </motion.div>
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="resume-btn"
        >
          <a href="">My resume</a>
        </motion.button>
      </div>
      <div className='Hero-img'>
        <motion.img
          src={heroImage}
          alt="Mumtaz Wali"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </div>
    </div>
  )
}



export default Home;
