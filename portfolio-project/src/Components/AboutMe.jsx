import React from "react";
import "../Components/AboutMe.css";
import { FaCode } from "react-icons/fa6";
import { LuPalette } from "react-icons/lu";
import { RxLightningBolt } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
function AboutMe() {
    return (
        <div id="about" className="About">
            <div className="About-Me">
                <h2 className="Me">About Me</h2>
                <p className="para-me">
                    I'm a passionate frontend developer with expertise in creating modern
                    web applications. My focus is on building responsive, accessible, and
                    performant user interfaces that provide exceptional user experiences.
                </p>
            </div>
            <div className="About-Cards">
                <div className="card">
                    <h className="card-icon"> <FaCode /></h>
                    <h2>Clean Code</h2>
                    <p>Writing maintainable, scalable, and well-documented code following best practices.</p>
                </div>
                <div className="card">
                    <h className="card-icon"><LuPalette /></h>
                    <h2>Modern Design</h2>
                    <p>Creating beautiful and intuitive user interfaces with attention to detail.</p>
                </div>
                <div className="card">
                    <h className="card-icon"><RxLightningBolt /></h>
                    <h2>Performance</h2>
                    <p>Optimizing applications for speed and efficiency across all devices.</p>
                </div>
                <div className="card">
                    <h className="card-icon">< LuUsers /></h>
                    <h2>Collaboration</h2>
                    <p>Working effectively with teams to deliver outstanding results.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
