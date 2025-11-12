import React from "react";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div className="menubar-container">
      <div className="menubar-logo">Kirtik Ayush</div>
      <div className="menubar-button-container">
        <div>About</div>
        <div>Projects</div>
        <div>Contacts</div>
        <div>Resume</div>
      </div>
    </div>
  );
};

export default Menubar;

// className = "menubar-button";
// className = "menubar-button";
// className = "menubar-button";
// className = "menubar-button";
