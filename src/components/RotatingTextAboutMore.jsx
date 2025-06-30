import React, { useState, useEffect } from "react";

const words = ["ABOUT ME", "ARICREATI"];

export default function RotatingTextAboutMore() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Dancing Script', cursive",
        fontWeight: "600",
        fontSize: "24px",
        color: "#FACDA6",
        userSelect: "none",
        letterSpacing: "6px", // Add letter spacing here
        transition: "opacity 0.5s ease",
      }}
    >
      {words[index]}
    </div>
  );
}



