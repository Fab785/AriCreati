import React from "react";
import Navbar from "../components/Navbar";
import headerImage from "../assets/pexels-leeloothefirst-6487215.jpg";

export default function AboutMore() {
  return (
    <>
      <div style={{ position: "relative", paddingTop: "200px" }}>
        <img
          src={headerImage}
          alt="About Me Header"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "550px",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.7,
          }}
        />

        <div
          className="content-window"
          style={{
            maxWidth: "1400px",
            borderRadius: "20px",
            margin: "0 auto 40px",
            padding: "20px 40px",
            position: "relative",
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Navbar />

          <div style={{ padding: "40px 0", color: "#A54040" }}>
            <h2>More About My Creative Journey</h2>
            <p>
              Here's where you can go deeper—talk about your journey, passions, experiences, or even show a gallery or timeline. Let the user explore your creative path!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

