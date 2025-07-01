import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Ari.jpg";
import RotatingTextAboutMore from "./RotatingTextAboutMore";

export default function AboutMoreNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="navbar-text-left">
          <h1 className="navbar-title-main">Aricreati</h1>
          <p className="navbar-subtitle-script">Creazioni</p>
        </div>
      </div>

      <RotatingTextAboutMore />

      <button
        className="burger-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
        <li>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            HOME
          </a>
        </li>
        {/* Removed ABOUT ME link here */}
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






