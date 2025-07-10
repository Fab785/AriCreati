import React from "react";
import ExtraNavbar from "../components/ExtraNavbar";
import bgImage from "../assets/Extrasback.jpg";
import Footer from "../components/Footer.jsx";
import imgKids1 from "../assets/kids.jpg";
import imgKids2 from "../assets/kids2.jpg";
import imgKids3 from "../assets/kiddo.jpg";
import imgKids4 from "../assets/fake.jpg";
import imgEco1 from "../assets/materiali.jpg";
import imgEco2 from "../assets/materiali2.jpg";
import imgEgypt1 from "../assets/egitto.jpg";
import imgEgypt2 from "../assets/egitto2.jpg";

export default function Extras() {
  return (
    <>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
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
        <div
          className="content-window"
          style={{
            maxWidth: "1200px",
            width: "90vw",
            minHeight: "600px",
            margin: "40px auto",
            backgroundColor: "#FACDA6",
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
          <div style={{ flex: "0 0 auto" }}>
            <ExtraNavbar />
          </div>

          <div
            style={{
              overflowY: "auto",
              padding: "150px 60px",
              flex: "1 1 auto",
              color: "#333",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {/* === Kids Section === */}
            <section
              style={{
                marginBottom: "60px",
                padding: "40px",
                background: "#FFEAD2",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h2
                style={{
                  color: "#A54040",
                  fontSize: "30px",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
              >
                Creative Moments with Children
              </h2>

              <div
                className="kids-gallery"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                  marginBottom: "30px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  {
                    src: imgKids1,
                    color: "#2ecc71",
                    rotate: "-8deg",
                    animation: "float 3s ease-in-out infinite",
                  },
                  {
                    src: imgKids2,
                    color: "#e74c3c",
                    rotate: "6deg",
                    animation: "float 4s ease-in-out infinite",
                  },
                  {
                    src: imgKids3,
                    color: "#3498db",
                    rotate: "-5deg",
                    animation: "float 3.5s ease-in-out infinite",
                  },
                  {
                    src: imgKids4,
                    color: "#9b59b6",
                    rotate: "7deg",
                    animation: "float 4.5s ease-in-out infinite",
                  },
                ].map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={`Kids ${index + 1}`}
                    style={{
                      width: "180px",
                      height: "auto",
                      borderRadius: "16px",
                      transform: `rotate(${img.rotate})`,
                      boxShadow: `0 0 12px 4px ${img.color}`,
                      animation: img.animation,
                    }}
                  />
                ))}
              </div>

              <p
                style={{
                  color: "#A54040",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  maxWidth: "800px",
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                Aricreati passionately collaborates with children through playful
                workshops, allowing their creativity to shine in colorful and
                unforgettable ways. These events spark imagination and joy — crafting
                art that’s just as magical as the smiles they inspire.
              </p>
            </section>

            {/* === Eco Section === */}
            <section
              style={{
                marginBottom: "60px",
                padding: "40px",
                background: "#F9E5D6",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
              }}
            >
              <div
                style={{
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
                  <h2
                    style={{ color: "#A54040", fontSize: "30px", marginBottom: "20px" }}
                  >
                    Sustainable & Natural Materials
                  </h2>
                  <p style={{ color: "#A54040", fontSize: "16px", lineHeight: 1.6 }}>
                    At Aricreati, the environment matters. That’s why each creation is
                    made with biodegradable and organic materials, proving that beauty
                    and sustainability can go hand-in-hand. Every piece tells a story of
                    love — not only for art but for the planet.
                  </p>
                </div>
              </div>
            </section>

            {/* === Egypt Section === */}
            <section
              style={{
                marginBottom: "60px",
                padding: "40px",
                background: "#FCE6D3",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
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
                  color: "#A54040",
                  maxWidth: "900px",
                  margin: "0 auto 30px",
                }}
              >
                A journey through time and mystery — Egypt inspires the soul of
                Aricreati. Ancient symbols, majestic pyramids, and golden textures
                ignite unique ideas reflected in one-of-a-kind works. This passion
                brings elegance, mystery, and history into modern creativity.
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

            {/* === THIS IS ARICREATI Section === */}
            <section
              style={{
                marginTop: "60px",
                padding: "40px",
                background: "#FFEAD2",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "#A54040",
                  letterSpacing: "0.15em",
                  textShadow: "2px 2px 6px rgba(165, 64, 64, 0.4)",
                  margin: 0,
                }}
              >
                THIS IS ARICREATI
              </h1>
            </section>
          </div>
        </div>
      </div>

      {/* Floating animation + Responsive fix for smartphones */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          @media (max-width: 600px) {
            .content-window {
              padding: 20px !important;
              max-height: calc(100vh - 100px) !important;
            }

            section {
              padding: 20px !important;
              margin-bottom: 40px !important;
            }

            section h2 {
              font-size: 22px !important;
              text-align: center !important;
            }

            section p {
              font-size: 14px !important;
              text-align: center !important;
              padding: 0 10px;
            }

            .kids-gallery {
              gap: 16px !important;
              flex-direction: column !important;
              align-items: center !important;
            }

            section img {
              width: 100% !important;
              height: auto !important;
            }

            h1 {
              font-size: 30px !important;
            }
          }
        `}
      </style>
    </>
  );
}

















