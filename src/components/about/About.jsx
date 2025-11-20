import React from "react";
import My_Picture from "../../assets/images/My_Picture.png";
import "./About.css";

function About() {
  const highlights = [
    { icon: "🚀", label: "Fast Learner", desc: "Adapting to new tech" },
    { icon: "✍️", label: "Tech Writer", desc: "Documentation & Poetry" },
    { icon: "🧩", label: "Problem Solver", desc: "Logic & Creativity" },
    { icon: "🌍", label: "Remote Ready", desc: "Timezone Flexible" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="number">01.</span> About Me
          </h2>
          <div className="line"></div>
        </div>
        {/* 1. Split Layout: Text Left, Image Right (Standard Desktop Pattern) */}
        <div className="about-grid">
          {/*Image Side*/}
          <div className="about-image-wrapper fade-in-left">
            <div className="image-frame">
              <img
                src={My_Picture}
                alt="Tinashe Dzikiti"
                className="profile-image"
              />
              {/* The Teal Border Effect */}
              <div className="frame-outline"></div>
            </div>
          </div>

          {/*Text Side*/}
          <div className="about-text-content fade-in-right">
            {/* <div className="section-header">
              <h2 className="section-title">
                <span className="number">01.</span> About Me
              </h2>
              <div className="line"></div>
            </div> */}

            <p className="bio-text">
              Hello! My name is Tinashe and I enjoy creating things that live on
              the internet. My interest in software engineering started at the
              <span className="highlight"> University of Zimbabwe</span>, where
              I discovered that coding is the perfect mix of logic and creative
              expression.
            </p>

            <p className="bio-text">
              I enjoy turning ideas into real products—whether that’s developing
              <span className="highlight"> AI-powered solutions </span>
              or crafting smooth, responsive interfaces in React. My work
              focuses on clean architecture, efficiency, and user-centered
              design.
            </p>

            <p className="bio-text">
              When I'm not at my terminal, I'm likely writing poetry, watching
              Formula 1, or taking nature walks to reset my mind for the next
              debugging session.
            </p>

            {/* 2. The "Soft Skills" Grid */}
            <div className="highlights-grid">
              {highlights.map((item, i) => (
                <div className="highlight-card" key={i}>
                  <span className="h-icon">{item.icon}</span>
                  <div className="h-text">
                    <span className="h-label">{item.label}</span>
                    <span className="h-desc">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
