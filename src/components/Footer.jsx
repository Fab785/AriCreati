import React from "react";
import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#F9E5D6",
        padding: "30px 20px",
        color: "#A54040",
        fontFamily: "'Montserrat', sans-serif",
        borderTop: "1px solid rgba(165, 64, 64, 0.2)",
        textAlign: "center",
        marginTop: "60px",
      }}
    >
      {/* Top section with nav and icons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto 20px",
          padding: "0 20px",
          gap: "20px",
        }}
      >
        {/* Navigation links */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about-more" style={linkStyle}>About</Link>
          <Link to="/gallery" style={linkStyle}>Gallery</Link>
          <Link to="/extras" style={linkStyle}>Extras</Link>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "16px", fontSize: "22px" }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaInstagram /></a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaPinterest /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaFacebook /></a>
        </div>
      </div>

      {/* Bottom info */}
      <div style={{ fontSize: "14px", opacity: 0.8 }}>
        <p>© 2025 Aricreati. All rights reserved.</p>
        <p>Based in Italy · Contact us at: aricreati@example.com</p>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#A54040",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.3s",
};

const iconStyle = {
  color: "#A54040",
  textDecoration: "none",
  transition: "transform 0.3s",
};