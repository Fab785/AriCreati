import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/Chloe.jpg";
import img2 from "../assets/pexels-anete-lusina-4792079.jpg";
import img3 from "../assets/pexels-anete-lusina-4792084.jpg";

export default function GallerySection() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px 20px" }}>
      <section
        id="gallery"
        style={{
          backgroundColor: "#FACDA6",
          padding: "100px 40px",
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
          fontFamily: "'Montserrat', sans-serif",
          borderRadius: "50px",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Overlapping Images */}
        <div style={{ position: "relative", width: "300px", height: "360px" }}>
          <img
            src={img3}
            alt="Gallery 3"
            style={{
              position: "absolute",
              top: "60px",
              left: "30px",
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              zIndex: 1,
              transform: "rotate(-2deg)",
            }}
          />
          <img
            src={img2}
            alt="Gallery 2"
            style={{
              position: "absolute",
              top: "30px",
              left: "15px",
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              zIndex: 2,
              transform: "rotate(2deg)",
            }}
          />
          <img
            src={img1}
            alt="Gallery 1"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              zIndex: 3,
              transform: "rotate(0deg)",
            }}
          />
        </div>

        {/* Text and Button */}
        <div style={{ maxWidth: "500px", textAlign: "left" }}>
          <h2 style={{ fontSize: "32px", color: "#A54040", marginBottom: "16px" }}>
            Our Artistic Collections
          </h2>
          <p style={{ fontSize: "16px", color: "#A54040", marginBottom: "24px" }}>
            Explore our curated works created for life’s most meaningful occasions—baby registries,
            birthday memories, and unforgettable weddings. Each piece is thoughtfully designed
            to preserve emotions through art.
          </p>
          <button
            onClick={() => navigate("/gallery")}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "700",
              backgroundColor: "#A54040",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#842f2f")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#A54040")}
          >
            View Full Gallery
          </button>
        </div>
      </section>
    </div>
  )
}



