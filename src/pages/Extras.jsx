import React from "react";
import ExtraNavbar from "../components/ExtraNavbar";
import bgImage from "../assets/Extrasback.jpg";
import imgKids1 from "../assets/kids.jpg";
import imgKids2 from "../assets/kids2.jpg";
import imgEco1 from "../assets/materiali.jpg";
import imgEco2 from "../assets/materiali2.jpg";
import imgEgypt1 from "../assets/egitto.jpg";
import imgEgypt2 from "../assets/egitto2.jpg";

export default function Extras() {
  return (
    <>
      {/* Outer wrapper matching Gallery.jsx */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          width: "100vw",
          overflow: "hidden",
          backgroundColor: "#FACDA6",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Floating window with exact Gallery styles */}
        <div
          className="content-window"
          style={{
            maxWidth: "1200px",
            width: "90vw",
            minHeight: "600px",
            margin: "40px auto",
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
            overflowY: "auto",
            maxHeight: "calc(100vh - 140px)",
          }}
        >
          {/* Navbar fixed inside floating window */}
          <div style={{ flex: "0 0 auto" }}>
            <ExtraNavbar />
          </div>

          {/* Scrollable content area */}
          <div
            style={{
              overflowY: "auto",
              padding: "120px 60px",
              flex: "1 1 auto",
              color: "#333",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <section style={{ marginBottom: "60px", textAlign: "center" }}>
              <h2 style={{ color: "#A54040", fontSize: "30px", marginBottom: "20px" }}>
                Creative Moments with Children
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.6, maxWidth: "800px", margin: "0 auto" }}>
                Aricreati passionately collaborates with children through playful workshops,
                allowing their creativity to shine in colorful and unforgettable ways.
                These events spark imagination and joy — crafting art that’s just as magical as
                the smiles they inspire.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  marginTop: "30px",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src={imgKids1}
                  alt="Kids workshop 1"
                  style={{ width: "45%", borderRadius: "12px", transform: "rotate(-3deg)" }}
                />
                <img
                  src={imgKids2}
                  alt="Kids workshop 2"
                  style={{ width: "45%", borderRadius: "12px", transform: "rotate(3deg)" }}
                />
              </div>
            </section>

            <section
              style={{
                marginBottom: "60px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "40px",
              }}
            >
              <div style={{ flex: 1 }}>
                <img
                  src={imgEco1}
                  alt="Eco materials 1"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ color: "#A54040", fontSize: "30px", marginBottom: "20px" }}>
                  Sustainable & Natural Materials
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  At Aricreati, the environment matters. That’s why each creation is made with
                  biodegradable and organic materials, proving that beauty and sustainability
                  can go hand-in-hand. Every piece tells a story of love — not only for art
                  but for the planet.
                </p>
              </div>
            </section>

            <section
              style={{
                marginBottom: "60px",
                backgroundColor: "#F3E1D0",
                padding: "30px",
                borderRadius: "16px",
              }}
            >
              <h2
                style={{
                  color: "#A54040",
                  fontSize: "30px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                A Passion for Egypt
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  textAlign: "center",
                  maxWidth: "900px",
                  margin: "0 auto 30px",
                }}
              >
                A journey through time and mystery — Egypt inspires the soul of Aricreati.
                Ancient symbols, majestic pyramids, and golden textures ignite unique ideas
                reflected in one-of-a-kind works. This passion brings elegance, mystery,
                and history into modern creativity.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src={imgEgypt1}
                  alt="Egypt theme 1"
                  style={{ width: "300px", borderRadius: "12px" }}
                />
                <img
                  src={imgEgypt2}
                  alt="Egypt theme 2"
                  style={{ width: "300px", borderRadius: "12px" }}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}












