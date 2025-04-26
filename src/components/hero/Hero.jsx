// components/Hero.jsx
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Tinashe B Dzikiti</h1>
        <h2>Software Engineer</h2>
        <p>Building creative digital experiences</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#footer" className="btn primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
