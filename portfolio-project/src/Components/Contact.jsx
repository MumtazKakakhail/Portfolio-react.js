import React from 'react'
import "./Contact.css"
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <div id='contact' className='contact-section'>
      <div className="contact-info">
        <h3>Contact information</h3>
        <div className='contact'>
          <span className="contact-icon"><AiOutlineMail /></span>
          <a href="mailto:mumtazwalikakakhail@gmail.com">mumtazwalikakakhail@gmail.com</a>
        </div>
        <div className='contact'>
          <span className="contact-icon"><CiPhone /></span>
          <a href="tel:+923478242245">+92 3478242245</a>
        </div>
        <div className='contact'>
          <span className="contact-icon"><CiLocationOn /></span>
          <span>Gilgit, Pakistan</span>
        </div>
        <div className='social'>
            <a href=""><FiGithub /></a>
            <a href="www.linkedin.com/in/mumtaz-wali-b67b26246"><FiLinkedin /></a>
 
        </div>
      </div>
      <div className="contact-form">
        <div className="touch">
          <h2>Get In Touch</h2>
        </div>
        <form action="#" method="POST">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact