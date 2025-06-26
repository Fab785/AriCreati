import React from "react";
import aboutImg from "../assets/pexels-willian-alves-254412482-12537777.jpg"; 

export default function AboutSection() {
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
      }}
    >
      <div style={{ flex: "1 1 400px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>About Me</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          I'm Aricreati, a passionate creator from Italy with years of experience in educational art. Through colors,
          textures, and passion, I bring creative ideas to life. My mission? To inspire, educate, and create emotional
          connections through each project.
        </p>
      </div>

      <div style={{ flex: "1 1 300px" }}>
        <img
          src={aboutImg}
          alt="About Me"
          style={{ width: "100%", borderRadius: "12px", boxShadow: "0 6px 20px rgba(0,0,0,0.2)" }}
        />
      </div>
    </section>
  );
}
