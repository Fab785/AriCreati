import React, { useState, useEffect } from "react";

const texts = ["ABOUT ME", "Aricreati"];

export default function RotatingTextAboutMore() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

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
      }}
    >
      {texts[index]}
    </div>
  );
}
