// components/Footer.jsx
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import Smeeks from "../../assets/images/Smeeks_Logo.png";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer section id="footer" className="footer">
      <div className="footer_container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home" className="logo">
              <img
                src={Smeeks}
                alt="Logo"
                className="logo-img"
              />
            </a>
          </div>
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a
              href="https://github.com/Smeeks01only"
              className="social-icon github"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/tinashe-dzikiti-a660092a2"
              className="social-icon linkedin"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://x.com/_T_Basil?t=xaX08NliL8y8f61aIwcodw&s=09"
              className="social-icon X"
            >
              <XIcon />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Tinashe B Dzikiti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
