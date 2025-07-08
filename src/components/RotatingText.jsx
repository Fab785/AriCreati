import React, { useState, useEffect } from "react";

const words = ["ARTS", "STYLE", "CREATIVITY", "DESIGN", "VISION"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        transition: "opacity 0.5s ease-in-out",
        opacity: fade ? 1 : 0,
        fontSize: "44px",
        fontWeight: "bold",
        color: "#FACDA6",
        marginLeft: "20px",
        minWidth: "90px",
        letterSpacing: "12px",
        textAlign: "center",
        userSelect: "none",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      {words[index]}
    </div>
  );
}

