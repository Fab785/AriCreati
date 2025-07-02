import React from "react";
import { useNavigate } from "react-router-dom";
import extraImage from "../assets/Bonus.jpg"; 

export default function ExtraSection() {
  const navigate = useNavigate();

  return (
    <section className="extra-section" style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap" }}>
      {/* Left: Image */}
      <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
        <img 
          src={extraImage} 
          alt="Extras Preview" 
          style={{ width: "100%", borderRadius: "16px", boxShadow: "0 6px 20px rgba(165, 64, 64, 0.3)", objectFit: "cover" }} 
        />
      </div>

      {/* Right: Text and Button */}
      <div style={{ flex: "1 1 300px", minWidth: "280px", color: "#A54040", fontFamily: "'Montserrat', sans-serif" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Extras & More</h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "30px" }}>
          Discover additional creative projects, behind-the-scenes insights, and exclusive content that
          showcase the depth of my artistic journey.
        </p>
        <button 
          onClick={() => navigate("/extras")} 
          style={{
            backgroundColor: "#A54040",
            color: "#FACDA6",
            border: "none",
            borderRadius: "12px",
            padding: "12px 30px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#7f2d2d"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#A54040"}
        >
          Extras
        </button>
      </div>
    </section>
  );
}
