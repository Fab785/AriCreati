import React, { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".content-window");

    const toggleVisible = () => {
      const scrollTop = container?.scrollTop || 0;
      if (scrollTop > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    container?.addEventListener("scroll", toggleVisible);
    return () => container?.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    const container = document.querySelector(".content-window");
    container?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "absolute", // <-- changed from 'fixed'
          bottom: "30px",
          right: "30px",
          padding: "10px 16px",
          fontSize: "18px",
          backgroundColor: "#A54040",
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
          transition: "opacity 0.3s ease",
        }}
      >
        ↑ Top
      </button>
    )
  );
}
