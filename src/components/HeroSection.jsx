import React from "react";
import heroImage from "../assets/pexels-jessbaileydesign-1117542.jpg"; // Use your image path

export default function HeroSection({ onDiscoverClick }) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "26px",
      }}
    >
      {/* Animated background layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "zoomIn 15s ease-in-out infinite alternate",
          zIndex: 1,
        }}
      />

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "40px 20px 0 20px",
          color: "#000",
          fontFamily: "'Montserrat', sans-serif",
          lineHeight: 1.2,
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "800", textTransform: "uppercase", margin: 0 }}>
          ITALY'S MOST
        </h2>

        <h1
          style={{
            fontSize: "80px",
            margin: "20px 0 10px",
            fontWeight: "900",
            fontFamily: "'Pacifico', cursive",
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
          As multi-award-winning artists across Italy, Aricreati are known as the artisans of the
          creative sector.
        </p>

        <p
          style={{
            fontSize: "20px",
            fontWeight: "600",
            fontStyle: "italic",
            marginTop: "30px",
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

        <div style={{ marginBottom: "80px" }}></div>
      </div>
    </section>
  );
}
