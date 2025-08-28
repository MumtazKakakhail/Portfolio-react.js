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
          <button className="menu" type="button">
            <HiMenu />
          </button>
        </div>
        <ul className={`nav-links${menuOpen ? " show" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;