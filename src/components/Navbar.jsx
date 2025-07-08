import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/Ari.jpg";
import RotatingText from "./RotatingText";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit (fake submit here)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation could be added here
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill all fields.");
      return;
    }

    // Here you can add your API call or form processing logic
    setFormSubmitted(true);
  };

  // Common link style with the desired color
  const linkColorStyle = { color: "#FACDA6" };

  return (
    <>
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
            <Link to="/" onClick={() => setIsMenuOpen(false)} style={linkColorStyle}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about-more" onClick={() => setIsMenuOpen(false)} style={linkColorStyle}>
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)} style={linkColorStyle}>
              GALLERY
            </Link>
          </li>
          <li>
            <Link to="/extras" onClick={() => setIsMenuOpen(false)} style={linkColorStyle}>
              EXTRAS
            </Link>
          </li>
          <li>
            {/* Use a button to open modal, styled to match links */}
            <button
              onClick={() => {
                setShowContactModal(true);
                setIsMenuOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                color: "#FACDA6",
                cursor: "pointer",
                fontSize: "inherit",
                fontWeight: "bold",
                padding: 0,
                fontFamily: "'Montserrat', sans-serif",
              }}
              aria-label="Open contact form"
            >
              CONTACTS
            </button>
          </li>
        </ul>
      </nav>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          onClick={() => setShowContactModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              maxWidth: "400px",
              width: "90%",
              padding: "30px 40px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              fontFamily: "'Montserrat', sans-serif",
              color: "#A54040",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowContactModal(false)}
              aria-label="Close contact form"
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "transparent",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#A54040",
              }}
            >
              ×
            </button>

            {!formSubmitted ? (
              <>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                  Stay in Touch
                </h2>
                <p style={{ marginBottom: "25px", fontSize: "15px", textAlign: "center" }}>
                  If you want to receive our newsletter or keep in touch for more info, please fill the form below.
                </p>

                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor="firstName"
                    style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    required
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      marginBottom: "15px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                    }}
                  />

                  <label
                    htmlFor="lastName"
                    style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    required
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      marginBottom: "15px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                    }}
                  />

                  <label
                    htmlFor="email"
                    style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      marginBottom: "25px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                    }}
                  />

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      backgroundColor: "#A54040",
                      color: "#fff",
                      padding: "12px 0",
                      border: "none",
                      borderRadius: "10px",
                      fontWeight: "700",
                      fontSize: "16px",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#842f2f")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#A54040")}
                  >
                    Subscribe
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 10px", fontSize: "18px" }}>
                Thank you for subscribing! We'll keep you updated.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
