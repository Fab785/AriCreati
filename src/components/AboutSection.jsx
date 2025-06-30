import React from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from "../assets/pexels-willian-alves-254412482-12537777.jpg";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
        padding: "60px 20px",
        color: "#A54040",
        fontFamily: "'Montserrat', sans-serif",
        backgroundColor: "#eee",
        borderRadius: "50px"
    
      }}
    >
      <div style={{ flex: "1 1 400px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>I'M ARICREATI!</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          A passionate creator from Italy with years of experience in educational art. Through
          colors, textures, and passion, I bring creative ideas to life. My mission? To inspire,
          educate, and create emotional connections through each project.
        </p>

        <button
          onClick={() => navigate("/about-more")}
          style={{
            marginTop: "30px",
            padding: "12px 28px",
            fontSize: "16px",
            fontWeight: "700",
            backgroundColor: "#A54040",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          ABOUT ME
        </button>
      </div>

      <div style={{ flex: "1 1 300px" }}>
        <img
          src={aboutImg}
          alt="About Me"
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </section>
  );
}