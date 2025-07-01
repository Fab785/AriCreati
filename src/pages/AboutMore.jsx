import React from "react";
import AboutMoreNavbar from "../components/AboutMoreNavbar";
import headerImage from "../assets/pexels-leeloothefirst-6487215.jpg";
import aboutDetailImg from "../assets/pexels-karolina-grabowska-6634748.jpg";
import secondImg from "../assets/pexels-miriam-alonso-7585762.jpg";

export default function AboutMore() {
  return (
    <>
      {/* Header background image */}
      <div style={{ position: "relative", paddingTop: "220px" }}>
        <img
          src={headerImage}
          alt="About Me Header"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "550px",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.7,
          }}
        />

        {/* Floating window with internal scroll */}
        <div
          className="content-window"
          style={{
            maxWidth: "1400px",
            height: "80vh", // 👈 height of floating window
            borderRadius: "20px",
            margin: "0 auto 40px",
            padding: "200px 20px 40px",
            position: "relative",
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Fixed navbar inside floating window */}
          <div style={{ flex: "0 0 auto" }}>
            <AboutMoreNavbar />
          </div>

          {/* Scrollable content */}
          <div
            style={{
              overflowY: "auto",
              padding: "40px 0",
              flex: "1 1 auto",
            }}
          >
            {/* SECTION 1: Image Left - Text Right */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                paddingBottom: "60px",
                color: "#A54040",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <img
                src={aboutDetailImg}
                alt="Creative Journey"
                style={{
                  width: "40%",
                  height: "300px",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                  objectFit: "cover",
                }}
              />
              <div style={{ width: "60%" }}>
                <h2>More About My Creative Journey</h2>
                <p>
                  Welcome to a deeper look into my world. My creative journey began with a love for
                  color, storytelling, and the magic of transformation through artistic expression.
                  Over the years, I’ve explored various forms of educational art, blending emotion
                  with design to craft experiences that speak to the heart.
                </p>
              </div>
            </div>

            {/* SECTION 2: Text Left - Image Right */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                flexDirection: "row-reverse",
                color: "#A54040",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <img
                src={secondImg}
                alt="Inspiration Process"
                style={{
                  width: "40%",
                  height: "300px",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                  objectFit: "cover",
                }}
              />
              <div style={{ width: "60%" }}>
                <h2>Inspiration Behind My Work</h2>
                <p>
                  Every creation begins with a spark—sometimes a color, a feeling, or a memory from
                  my hometown. I draw inspiration from nature, daily life, and human emotion, turning
                  ordinary moments into meaningful visuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




