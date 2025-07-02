import React, { useState } from "react";
import GalleryNavbar from "../components/GalleryNavbar";
import HeartSpinner from "../components/HeartSpinner";
import headerImage from "../assets/pexels-surene-palvie-1075224-2399125.jpg";
import img1 from "../assets/Arlena.jpg";
import img2 from "../assets/Chloe.jpg";
import img3 from "../assets/Rebecca.jpg";
import img4 from "../assets/Erika.jpg";
import img5 from "../assets/Cuori2.jpg";
import img6 from "../assets/Cuori.jpg";
import img7 from "../assets/Gardetti.jpg";
import img8 from "../assets/Pianta.jpg";
import img9 from "../assets/Fiori.jpg";
import img10 from "../assets/Fiori1.jpg";
import img11 from "../assets/sonagli2.jpg";
import img12 from "../assets/sonagli.jpg";
import img13 from "../assets/borse.jpg";
import img14 from "../assets/bear.jpg";
import img15 from "../assets/bear2.jpg";
import img16 from "../assets/bunny.jpg";

export default function Gallery() {
  const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];
  const [visibleCount, setVisibleCount] = useState(8);
  const [modalImg, setModalImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 4);
      setLoading(false);
    }, 1200); // Simulate load time
  };

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

            {/* Gallery Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
              }}
            >
              {allImages.slice(0, visibleCount).map((img, index) => (
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

            {/* Load More or Spinner */}
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              {loading ? (
                <HeartSpinner />
              ) : (
                visibleCount < allImages.length && (
                  <button
                    onClick={handleLoadMore}
                    style={{
                      padding: "12px 24px",
                      fontSize: "16px",
                      fontWeight: "600",
                      backgroundColor: "#A54040",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#842f2f")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#A54040")}
                  >
                    Load More
                  </button>
                )
              )}
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

