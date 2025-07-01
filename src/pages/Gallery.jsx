// src/pages/Gallery.jsx
import React from "react";
import GalleryNavbar from "../components/GalleryNavbar";
import headerImage from "../assets/pexels-leeloothefirst-6487215.jpg"; // replace with your header bg for gallery
import img1 from "../assets/pexels-surene-palvie-1075224-2070687.jpg";
import img2 from "../assets/pexels-anete-lusina-4792079.jpg";
import img3 from "../assets/pexels-anete-lusina-4792084.jpg";

export default function Gallery() {
  return (
    <>
      {/* Background image */}
      <div
        style={{
          position: "relative",
          paddingTop: "100px",
          minHeight: "100vh",
          marginBottom: "0vh",
        }}
      >
        <img
          src={headerImage}
          alt="Gallery Header"
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

        {/* Floating window */}
        <div
  className="content-window"
  style={{
    maxWidth: "1800px",
    width: "90vw",
    height: "95vh",
    borderRadius: "0",
    margin: "20px auto",
    padding: "160px 60px 40px",
    position: "relative",
    zIndex: 1,
    backgroundColor: "#FACDA6",
    backdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
  }}
>

          {/* Navbar fixed inside floating window */}
          <div style={{ flex: "0 0 auto" }}>
            <GalleryNavbar />
          </div>

          {/* Scrollable content */}
          <div
            style={{
              overflowY: "auto",
              padding: "40px 0",
              flex: "1 1 auto",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                color: "#A54040",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              My Visual Gallery
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              A curated glimpse into my creative works — each image reflects a moment, a message, or a
              memory.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
              }}
            >
              {[img1, img2, img3, img1, img2, img3].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery item ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

