import React, { useState } from "react";
import "./Header.css";
import { HiMenu } from "react-icons/hi";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div>
        <h1>MUMTAZ WALI</h1>
      </div>
      <nav>
        <div
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
        <a href="" className="menu"> <HiMenu /></a> 
        </div>
        <ul className={`nav-links${menuOpen ? " show" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;