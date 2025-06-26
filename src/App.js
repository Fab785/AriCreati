import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// Import other sections later...

function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* Spacer goes here BEFORE the window */}
      <div style={{ height: "250px" }}></div>

      {/* Floating window starts AFTER spacer */}
      <div className="content-window">
        <HeroSection />
        {/* Other sections */}
      </div>
    </div>
  );
}



export default App;



