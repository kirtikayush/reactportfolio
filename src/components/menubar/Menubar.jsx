import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Menubar.css";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menubar-container">
      <div className="menubar-logo">Kirtik Ayush</div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Menu buttons */}
      <div className={`menubar-button-container ${isOpen ? "show" : ""}`}>
        <div className="close-button" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </div>
        <div className="menubar-button">About</div>
        <div className="menubar-button">Projects</div>
        <div className="menubar-button">Contacts</div>
        <div className="menubar-button">Resume</div>
      </div>
    </div>
  );
};

export default Menubar;
