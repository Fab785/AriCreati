import React from "react";
import "../styles/HeartSpinner.css"; // We'll create this next

export default function HeartSpinner() {
  return (
    <div className="heart-loader-wrapper">
      <div className="heart"></div>
      <div className="heart"></div>
      <div className="heart"></div>
    </div>
  );
}
