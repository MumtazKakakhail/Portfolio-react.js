import React from 'react'
import "./Footer.css"
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
                <a
          className="social-link"
          href="https://github.com/MumtazKakakhail"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
                 <a
          className="social-link"
          href="https://www.fiverr.com//freelancers/mumtazwali463"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fiverr"
        >
          <SiFiverr />
        </a>
         <a
          className="social-link"
          href="https://www.upwork.com/freelancers/~019a2b3605346dab1b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Upwork "
        >
          <SiUpwork  />
        </a>
            </div>
        </div>
    )
}

export default Footer;

