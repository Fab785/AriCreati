import React from "react";
import bgImage from "../assets/pexels-jessbaileydesign-1117542.jpg"; // percorso relativo

export default function HeroSection({ onDiscoverClick }) {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "40px 20px 80px",
        color: "#000",
        fontFamily: "'Montserrat', sans-serif",
        lineHeight: 1.2,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "26px",
        boxShadow: "inset 0 0 60px rgba(255, 255, 255, 0.7)", // per far risaltare il testo
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Overlay semitrasparente per migliorare leggibilità */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.65)",
        borderRadius: "26px",
        zIndex: 0,
      }} />

      {/* Contenuto in primo piano */}
      <div style={{ position: "relative", zIndex: 2 }}>
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
          onClick={onDiscoverClick}
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
          DISCOVER MORE
        </button>

        {/* Spacer after button */}
        <div style={{ marginBottom: "80px" }}></div>
      </div>
    </section>
  );
}
