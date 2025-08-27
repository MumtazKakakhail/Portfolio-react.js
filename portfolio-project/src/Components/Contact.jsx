import React from 'react'
import "./Contact.css"
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <div  id='contact' className='form'>
      <div  className="contact-form">
        <div className="touch">
          <h2>Get In Touch</h2>
          <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
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