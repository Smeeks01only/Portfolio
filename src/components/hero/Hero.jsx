// components/Hero.jsx
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content fade-in">
          <h1>Tinashe B Dzikiti</h1>
          <h2 className="delay-1">Software Engineer</h2>
          <p className="delay-2">Building creative digital experiences</p>
          <div className="hero-buttons delay-3">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#footer" className="btn primary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image fade-in delay-4">
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80"
            alt="Creative tech workspace"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
