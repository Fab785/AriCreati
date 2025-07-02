import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import AboutMore from "./pages/AboutMore";
import Gallery from "./pages/Gallery";
import Extras from "./pages/Extras";
import ExtrasSection from "./components/ExtrasSection";
import BackToTopButton from "./UI/BackToTopButton";

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const HomePage = () => (
    <>
      <Navbar />
      <div style={{ height: "250px" }}></div>
      <div className="content-window">
        <HeroSection onDiscoverClick={scrollToAbout} />
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <GallerySection />
        <ExtrasSection />
      </div>
      <BackToTopButton />
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-more" element={<AboutMore />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/extras" element={<Extras />} />
      </Routes>
    </Router>
  );
}

export default App;









