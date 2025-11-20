import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a
          href="https://github.com/Smeeks01only"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/tinashe-dzikiti-a660092a2"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a href="https://x.com/_T_Basil" target="_blank" rel="noreferrer">
          <XIcon />
        </a>
      </div>

      <div className="footer-text">
        <a
          href="https://github.com/Smeeks01only/portfolio-v1"
          target="_blank"
          rel="noreferrer"
        >
          Designed & Built by Tinashe B Dzikiti
        </a>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Harare, Zimbabwe
        </p>
      </div>
    </footer>
  );
}

export default Footer;
