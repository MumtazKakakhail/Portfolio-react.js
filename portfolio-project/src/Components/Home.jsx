import React from 'react'
import "../Components/Home.css"
import heroImage from "./images/img1.png"
function Home() {
  return (
    <div className='Hero-section'>
        
            <div className='Hero'>
                <h3>Hello <span>.</span></h3>
                <h4>I'm Mumtaz Wali</h4>
                <h2>Front-End Developer</h2>
               <button><a href="">My resume</a></button>

            </div>
            {/* <div className="Hero-button">
            </div> */}
            <div className='Hero-img'>
             <img src={heroImage} alt="Mumtaz Wali" />
        </div>
    </div>
  )
}

export default Home


