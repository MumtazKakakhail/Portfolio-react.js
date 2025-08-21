import React from 'react'
import "./Footer.css"
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <h2 className='heading'>MUMTAZ WALI</h2>
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications <br />
                 that leads to the success of the overall product.</p>
            </div>
            <div className="socials">
                <h2 className='heading'>SOCIAL</h2>
              <a href=""><TiSocialLinkedin /></a> 
               <a href=""><FaGithub /></a> 
               <a href=""><SiUpwork /></a> 
               <a href=""><SiFiverr /></a> 
            </div>
        </div>
    )
}

export default Footer
