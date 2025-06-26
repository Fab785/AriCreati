import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ height: "250px" }}></div> {/* Spacer */}

      <div className="content-window">
        <HeroSection onDiscoverClick={scrollToAbout} />
        <div ref={aboutRef} style={{ minHeight: "400px", backgroundColor: "#FACDA6" }}>
          <AboutSection />
        </div>
      </div>
    </>
  );
}

export default App;






