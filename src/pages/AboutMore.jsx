import React from "react";
import AboutMoreNavbar from "../components/AboutMoreNavbar";
import headerImage from "../assets/pexels-leeloothefirst-6487215.jpg";
import aboutDetailImg from "../assets/pexels-karolina-grabowska-6634748.jpg";
import secondImg from "../assets/pexels-miriam-alonso-7585762.jpg"; // Add your second image here

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

        {/* Floating content window */}
        <div
          className="content-window"
          style={{
            maxWidth: "1400px",
            borderRadius: "20px",
            margin: "0 auto 40px",
            padding: "100px 40px 40px 40px", // Increased top padding
            position: "relative",
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
          }}
        >
          <AboutMoreNavbar />

          {/* SECTION 1: Image Left - Text Right */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              padding: "100px 0 40px 0",
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
                with design to craft experiences that speak to the heart. Whether through
                brushstrokes, digital compositions, or hands-on workshops, each project reflects
                my belief in the power of creativity to inspire, connect, and educate. <br /><br />
                In this space, you'll discover the behind-the-scenes of my work — the moments of
                inspiration, the challenges, and the personal growth that has shaped who I am as
                an artist and creator. Scroll through the visuals, explore the stories, and immerse
                yourself in a gallery that reflects both my Italian roots and my passion for
                meaningful design.
              </p>
            </div>
          </div>

          {/* SECTION 2: Text Left - Image Right */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              padding: "20px 0 60px 0",
              color: "#A54040",
              fontFamily: "'Montserrat', sans-serif",
              flexDirection: "row-reverse",
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
                ordinary moments into meaningful visuals. This process is both spontaneous and
                intentional, shaped by years of exploration, study, and intuition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



