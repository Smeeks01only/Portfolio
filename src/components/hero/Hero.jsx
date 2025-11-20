import React from "react";
import "./Hero.css";
import Hero_Image from "../../assets/images/programmer_office.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content fade-in">
          {/* 1. Availability Badge: Signals you are ready to hire immediately */}
          <div className="status-badge delay-1">
            <span className="status-dot"></span>
            Available for Work
          </div>

          <h1>Hi, I'm Tinashe Dzikiti</h1>

          {/* 2. Specific Role: Be specific about what you do */}
          <h2 className="delay-2">
            <span className="highlight">Full-Stack Developer</span> (React &
            Python)
          </h2>

          <p className="delay-3">
            I build accessible, pixel-perfect web applications for global
            clients. Based in Harare, shipping code worldwide.
          </p>

          <div className="hero-buttons delay-4">
            <a href="#projects" className="btn primary">
              View My Work
            </a>
            {/* 3. Secondary Button: Changed to 'secondary' class for visual hierarchy */}
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>

          {/* 4. Tech Stack Bar: Show, don't just tell */}
          <div className="tech-stack delay-5">
            <p>Tech Stack:</p>
          </div>
          <div className="tech-icons">
            <span>React</span>
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>SQL</span>
            <span>•</span>
            <span>JavaScript</span>
            <span>•</span>
            <span>Java</span>
            <span>•</span>
            <span>Django</span>
          </div>
        </div>

        <div className="hero-image-wrapper fade-in delay-4">
          {/* 5. Added a glowing background effect behind the image */}
          <div className="glow-effect"></div>
          <img
            src={Hero_Image}
            alt="Tinashe Dzikiti - Software Engineer"
            className="floating-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
