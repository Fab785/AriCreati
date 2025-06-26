import React, { useState } from "react";
import "../App.css";
import logo from "../assets/Ari.jpg";
import RotatingText from "./RotatingText";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="navbar-text-left">
          <h1 className="navbar-title-main">Aricreati</h1>
          <p className="navbar-subtitle-script">Creazioni</p>
        </div>
      </div>

      <RotatingText />

      <button
        className="burger-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT ME</a>
        </li>
        <li>
          <a href="#gallery">GALLERY</a>
        </li>
        <li>
          <a href="#workplace">WORKPLACE</a>
        </li>
        <li>
          <a href="#contact">CONTACTS</a>
        </li>
      </ul>
    </nav>
  );
}
