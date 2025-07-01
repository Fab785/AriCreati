import React, { useState } from "react";
import img1 from "../assets/pexels-surene-palvie-1075224-2070687.jpg";
import img2 from "../assets/pexels-anete-lusina-4792079.jpg";
import img3 from "../assets/Chloe.jpg";

const initialImages = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
];

export default function GallerySection() {
  const [images, setImages] = useState(initialImages);

  const bringToFront = (id) => {
    const clickedImage = images.find((img) => img.id === id);
    const otherImages = images.filter((img) => img.id !== id);
    setImages([clickedImage, ...otherImages]); // Move clicked to front
  };

  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "#EDEDED",
        padding: "100px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "60px",
        flexWrap: "wrap",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* LEFT: Overlapping images with click-to-front */}
      <div style={{ position: "relative", width: "320px", height: "340px", cursor: "pointer" }}>
        {images
          .map((img, index) => ({
            ...img,
            top: `${index * 20}px`,
            left: `${index * 20}px`,
            zIndex: images.length - index,
            opacity: 1 - index * 0.2,
            brightness: 100 - index * 10,
          }))
          .reverse()
          .map(({ id, src, top, left, zIndex, opacity, brightness }) => (
            <img
              key={id}
              src={src}
              alt={`Artwork ${id}`}
              onClick={() => bringToFront(id)}
              style={{
                position: "absolute",
                top,
                left,
                width: "100%",
                height: "300px",
                borderRadius: "16px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                objectFit: "cover",
                transition: "all 0.4s ease",
                zIndex,
                opacity,
                filter: `brightness(${brightness}%)`,
              }}
            />
          ))}
      </div>

      {/* RIGHT: Description and button */}
      <div style={{ maxWidth: "500px", textAlign: "left" }}>
        <h2 style={{ color: "#A54040", fontSize: "32px", marginBottom: "20px" }}>
          Perfect for Every Occasion
        </h2>
        <p style={{ fontSize: "18px", color: "#444", marginBottom: "30px" }}>
          Whether it's a baby registry, a birthday celebration, or a dreamy wedding,
          our custom creations are designed to bring joy and unforgettable style to every
          moment. Explore a collection of our favorite past designs in the gallery.
        </p>
        <button
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "700",
            backgroundColor: "#A54040",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => {
            // Navigate or scroll to full gallery page
            window.location.href = "/gallery"; // Replace with your route
          }}
        >
          VIEW GALLERY
        </button>
      </div>
    </section>
  );
}



