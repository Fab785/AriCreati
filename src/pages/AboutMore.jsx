import React from "react";
import AboutMoreNavbar from "../components/AboutMoreNavbar";
import headerImage from "../assets/pexels-leeloothefirst-6487215.jpg";
import aboutDetailImg from "../assets/pexels-karolina-grabowska-6634748.jpg";
import secondImg from "../assets/pexels-miriam-alonso-7585762.jpg";
import thirdImg from "../assets/pexels-karolina-grabowska-6634775.jpg";

export default function AboutMore() {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
        }}
      >
        <img
          src={headerImage}
          alt="About Me Header"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.7,
          }}
        />

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
            <AboutMoreNavbar />
          </div>

          <div
            style={{
              overflowY: "auto",
              padding: "180px 0 60px",
              flex: "1 1 auto",
              display: "flex",
              flexDirection: "column",
              gap: "120px",
            }}
          >
            {/* Section 1 */}
            <div
              style={{
                backgroundColor: "#FFEAD2", // ✅ light peach for section
                display: "flex",
                alignItems: "flex-start",
                gap: "40px",
                padding: "40px",
                color: "#A54040",
                fontFamily: "'Montserrat', sans-serif",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
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
                <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>More About My Creative Journey</h2>
                <p style={{ fontSize: "18px", lineHeight: 1.7 }}>
                  Welcome to a deeper look into my world. My creative journey began with a love for
                  color, storytelling, and the magic of transformation through artistic expression.
                  Over the years, I’ve explored various forms of educational art, blending emotion
                  with design to craft experiences that speak to the heart.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div
              style={{
                backgroundColor: "#FFEAD2", // ✅ light peach for section
                display: "flex",
                alignItems: "flex-start",
                gap: "40px",
                padding: "40px",
                color: "#A54040",
                fontFamily: "'Montserrat', sans-serif",
                flexDirection: "row-reverse",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
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
                <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Inspiration Behind My Work</h2>
                <p style={{ fontSize: "18px", lineHeight: 1.7 }}>
                  Every creation begins with a spark—sometimes a color, a feeling, or a memory from
                  my hometown. I draw inspiration from nature, daily life, and human emotion, turning
                  ordinary moments into meaningful visuals.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div
              style={{
                backgroundColor: "#FFEAD2", // ✅ light peach for section
                display: "flex",
                alignItems: "flex-start",
                gap: "40px",
                padding: "40px",
                color: "#A54040",
                fontFamily: "'Montserrat', sans-serif",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                src={thirdImg}
                alt="Creative Tools"
                style={{
                  width: "40%",
                  height: "300px",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                  objectFit: "cover",
                }}
              />
              <div style={{ width: "60%" }}>
                <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Tools and Materials I Love</h2>
                <p style={{ fontSize: "18px", lineHeight: 1.7 }}>
                Whether it’s soft yarn, delicate stitches, or the rhythm of the hook in my hand, I choose each material and technique thoughtfully to bring out the best in my work. This process reflects not just what I create, but how I connect with every piece I make.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




