import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        Tinashe the aspiring Software Engineer | Follow me on:
        <a
          href="https://github.com/Smeeks01only"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |
        <a
          href="https://linkedin.com/in/tinashe-dzikiti-a660092a2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          LinkedIn
        </a>
      </p>

      <p>&copy; 2024 </p>
    </div>
  );
}

export default Footer;
