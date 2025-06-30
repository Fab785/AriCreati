import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AboutMore from "./pages/AboutMore";

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const HomePage = () => (
    <>
      <Navbar /> {/* Only here at the top */}
      <div style={{ height: "250px" }}></div>
      <div className="content-window">
        <HeroSection onDiscoverClick={scrollToAbout} />
        <div ref={aboutRef}>
          <AboutSection />
        </div>
      </div>
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-more" element={<AboutMore />} />
      </Routes>
    </Router>
  );
}

export default App;




