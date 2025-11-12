import React from "react";
import "./Footer.css";
import {
  FaLinkedin,
  FaEnvelope,
  FaMedium,
  FaGithubSquare,
} from "react-icons/fa";
import { socialLinks } from "../../assets/variables";
import { handleClick } from "../../utils/handleClick";
const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      {/* <h1>Thank you for visiting my profile</h1> */}
      <div className="footer-content">
        <h2>Get in touch!</h2>
        <div className="footer-content-icons">
          <FaEnvelope
            className="footer-icon"
            size={60}
            onClick={() => handleClick(socialLinks.email)}
          ></FaEnvelope>
          <FaLinkedin
            className="footer-icon"
            size={60}
            onClick={() => handleClick(socialLinks.linkedin)}
          ></FaLinkedin>
          <FaMedium
            className="footer-icon"
            size={60}
            onClick={() => handleClick(socialLinks.medium)}
          ></FaMedium>
          <FaGithubSquare
            className="footer-icon"
            size={60}
            onClick={() => handleClick(socialLinks.github)}
          ></FaGithubSquare>
        </div>
      </div>
    </div>
  );
};

export default Footer;
