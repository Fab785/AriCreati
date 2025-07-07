// src/components/ExtraNavbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Ari.jpg";
import RotatingTextExtras from "./RotatingTextExtras";

export default function ExtraNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill all fields.");
      return;
    }
    setFormSubmitted(true);
  };

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
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setShowContactModal(true);
                setIsMenuOpen(false);
              }}
            >
              CONTACTS
            </a>
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
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
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
                  <label htmlFor="firstName" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
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

                  <label htmlFor="lastName" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
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

                  <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
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

