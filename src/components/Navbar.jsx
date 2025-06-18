import React from "react";
import "../App.css";
import logo from "../assets/Ari.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />

      <div className="navbar-title">
  <span className="title-main">Aricreati</span>
  <br />
  <span className="title-sub">CREAZIONI</span>
</div>


      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
