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
import Footer from "./components/Footer.jsx"; // ✅ Import Footer

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
      <Footer /> {/* ✅ Footer added outside floating window */}
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about-more"
          element={
            <>
              <AboutMore />
              <Footer /> {/* ✅ Footer added to about-more */}
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Gallery />
              <Footer /> {/* ✅ Footer added to gallery */}
            </>
          }
        />
        <Route
          path="/extras"
          element={
            <>
              <Extras />
              <Footer /> {/* ✅ Footer added to extras */}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;









