import React from "react";
import logo from "../assets/Ari.jpg";

export default function AboutMoreNavbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "10px 0",
        borderBottom: "1px solid #A54040",
        color: "#A54040",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "2px solid #A54040",
          objectFit: "cover",
        }}
      />
      {/* No 'About Me' button here as you requested */}
      <h3 style={{ fontFamily: "'Dancing Script', cursive", fontWeight: "600", margin: 0 }}>
        Creazioni
      </h3>
    </nav>
  );
}

