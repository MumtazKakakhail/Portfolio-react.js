import React from 'react'
import "../Components/Home.css"
import heroImage from "./images/img1.png"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { Typewriter } from './Typewriter'
function Home() {
  return (
    <div id='home' className='Hero-section'>

      <div className='Hero'>
        <Typewriter text={"Hello"} />
        <Typewriter text={"I'm Mumtaz Wali"} />
        <Typewriter text={"Frontend Developer"} />
        <button><a href="">My resume</a></button>
      </div>
      {/* <div className="Hero-button">
            </div> */}
      <div className='Hero-img'>
        <img src={heroImage} alt="Mumtaz Wali"/>
      </div>
    </div>
  )
}

export default Home;
