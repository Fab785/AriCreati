import React from "react";

export default function HeroSection() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "40px 20px 60px",
        color: "#000",
        fontFamily: "'Montserrat', sans-serif",
        lineHeight: 1.2,
        backgroundColor: "transparent",
        display: "block", // changed from flex to block
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          margin: "0",
          fontWeight: "800",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        ITALY'S MOST
      </h2>

      <h1
        style={{
          fontSize: "80px",
          margin: "20px 0 10px",
          fontWeight: "900",
          fontFamily: "'Pacifico', cursive",
          color: "#000",
        }}
      >
        Exciting
      </h1>

      <h2
        style={{
          fontSize: "28px",
          fontWeight: "800",
          textTransform: "uppercase",
          margin: "30px 0 20px",
        }}
      >
        Creative Company
      </h2>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 20px",
          fontSize: "18px",
          fontWeight: "400",
          color: "#333",
        }}
      >
        As multi-award-winning artists across Italy, Aricreati are known as the
        artisans of the creative sector.
      </p>

      <p
        style={{
          fontSize: "20px",
          fontWeight: "600",
          fontStyle: "italic",
          marginTop: "30px",
          color: "#000",
        }}
      >
        Good Creations, Real Artists, Great Vibes.
      </p>

      <button
        style={{
          marginTop: "40px",
          padding: "12px 28px",
          fontSize: "16px",
          fontWeight: "700",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        WHO WE ARE
      </button>
    </section>
  );
}


