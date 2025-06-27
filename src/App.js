import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AboutMore from "./pages/AboutMore"; // import the new page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div style={{ height: "250px" }}></div>
              <div className="content-window">
                <HeroSection />
                <AboutSection />
              </div>
            </>
          }
        />
        <Route path="/about-more" element={<AboutMore />} />
      </Routes>
    </Router>
  );
}

export default App;





