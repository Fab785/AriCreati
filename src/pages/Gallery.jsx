import React, { useState } from "react";
import GalleryNavbar from "../components/GalleryNavbar";
import headerImage from "../assets/pexels-surene-palvie-1075224-2399125.jpg";
import img1 from "../assets/IMG1.jpg";
import img2 from "../assets/IMG-20250617-WA0009.jpg";
import img3 from "../assets/IMG3.jpg";
import img4 from "../assets/IMG-20250617-WA0004.jpg";
import img5 from "../assets/Chloe.jpg";
import img6 from "../assets/IMG-20250617-WA0007.jpg";
import img7 from "../assets/IMG-20250617-WA0008.jpg";

export default function Gallery() {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    <>
      {/* Page wrapper with background image and vertical centering */}
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

        {/* Floating content window */}
        <div
          className="content-window"
          style={{
            maxWidth: "1800px",
            width: "95vw",
            height: "90vh",
            borderRadius: "20px",
            margin: "0 auto",
            padding: "140px 60px 40px",
            position: "relative",
            zIndex: 1,
            backgroundColor: "#FACDA6",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Navbar fixed at top */}
          <div style={{ flex: "0 0 auto" }}>
            <GalleryNavbar />
          </div>

          {/* Scrollable content area */}
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
              A curated glimpse into my creative works — each image reflects a moment, a message, or a memory.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
              }}
            >
              {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onClick={() => openModal(img)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(165, 64, 64, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
                  }}
                >
                  <img
                    src={img}
                    alt={`Gallery item ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: "16px",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal overlay */}
      {modalImg && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <img
            src={modalImg}
            alt="Expanded gallery"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(165, 64, 64, 0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              background: "#A54040",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "24px",
              cursor: "pointer",
              lineHeight: "40px",
              textAlign: "center",
              padding: 0,
            }}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

