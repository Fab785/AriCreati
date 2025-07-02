// src/components/ExtraNavbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Ari.jpg";
import RotatingTextExtras from "./RotatingTextExtras";

export default function ExtraNavbar() {
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

      <RotatingTextExtras />

      <button
        className="burger-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about-more" onClick={() => setIsMenuOpen(false)}>
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
            GALLERY
          </Link>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            CONTACTS
          </a>
        </li>
      </ul>
    </nav>
  );
}
