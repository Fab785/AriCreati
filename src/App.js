import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      {/* 🌟 Spacer between navbar and content */}
      <div style={{ height: "250px" }}></div>

      <div className="content-window">
        <HeroSection onDiscoverClick={scrollToAbout} />
        <div ref={aboutRef}>
          <AboutSection />
        </div>
      </div>
    </>
  );
}

export default App;




