import React, { useState, useEffect } from "react";

const words = ["EXTRAS", "ARICREATI", "CREAZIONI"];

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
        fontSize: "44px",
        color: "#FACDA6",
        userSelect: "none",
        letterSpacing: "22px", // Add letter spacing here
        transition: "opacity 0.5s ease",
      }}
    >
      {words[index]}
    </div>
  );
}
