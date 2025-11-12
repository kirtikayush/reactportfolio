import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Menubar.css";
import { handleClick } from "../../utils/handleClick";
import { socialLinks } from "../../assets/variables";
import { Link } from "react-scroll";

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
        {/* <div className="menubar-button">About</div> */}
        {/* <div className="menubar-button">Projects</div> */}
        {/* <div className="menubar-button">Contacts</div> */}
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-50}
          className="menubar-button"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={600}
          offset={-50}
          className="menubar-button"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="footer"
          smooth={true}
          duration={500}
          offset={-50}
          className="menubar-button"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        <div
          className="menubar-button"
          onClick={() => handleClick(socialLinks.resume)}
        >
          Resume
        </div>
      </div>
    </div>
  );
};

export default Menubar;
