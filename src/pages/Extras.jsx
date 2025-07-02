// src/pages/Extras.jsx
import React from "react";
import ExtraNavbar from "../components/ExtraNavbar";

export default function Extras() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "100px",
        backgroundColor: "#FACDA6",
        backgroundImage: "url('../assets/Rainbows 2.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="content-window"
        style={{
          maxWidth: "1200px",
          width: "90vw",
          minHeight: "600px",
          margin: "0 auto 40px",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          borderRadius: "26px",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(165, 64, 64, 0.3)",
          padding: "40px 60px",
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
          position: "relative",
        }}
      >
        <ExtraNavbar />

        <div style={{ flex: "1 1 auto", marginTop: "30px", color: "#A54040", fontFamily: "'Montserrat', sans-serif" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Extras — More to Discover</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Welcome to the Extras section — a special place to showcase unique projects, behind-the-scenes stories,
            and exclusive insights that don’t fit anywhere else. Stay tuned for upcoming additions!
          </p>
          {/* You can add images, buttons, or more content here */}
        </div>
      </div>
    </div>
  );
}
