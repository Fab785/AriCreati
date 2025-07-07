// src/components/LanguageSwitcher.jsx
import React from "react";
import i18n from "../i18n"; // assuming you already have i18n.js setup
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ position }) {
  // position: 'under-navbar' or 'top-right'

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const containerStyle = {
    display: "flex",
    gap: "10px",
    position: position === "top-right" ? "fixed" : "relative",
    top: position === "top-right" ? "10px" : "auto",
    right: position === "top-right" ? "10px" : "auto",
    justifyContent: "center",
    marginTop: position === "under-navbar" ? "8px" : "0",
    zIndex: 1000,
  };

  const flagStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    cursor: "pointer",
    border: "2px solid transparent",
    transition: "border-color 0.3s",
  };

  const onFlagHover = (e) => {
    e.currentTarget.style.borderColor = "#A54040";
  };

  const onFlagLeave = (e) => {
    e.currentTarget.style.borderColor = "transparent";
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://flagcdn.com/w40/it.png"
        alt="Italian"
        style={flagStyle}
        onClick={() => changeLanguage("it")}
        onMouseEnter={onFlagHover}
        onMouseLeave={onFlagLeave}
      />
      <img
        src="https://flagcdn.com/w40/us.png"
        alt="English"
        style={flagStyle}
        onClick={() => changeLanguage("en")}
        onMouseEnter={onFlagHover}
        onMouseLeave={onFlagLeave}
      />
    </div>
  );
}
