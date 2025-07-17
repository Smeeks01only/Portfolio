import React from "react";
import My_Picture from "../../assets/images/My_Picture.png";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Curious mind. Creative soul. Tech explorer.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={My_Picture} alt="My portrait" className="profile-image" />
          </div>

          <div className="about-text">
            <p>
              I’m a curious, hardworking, and introverted individual with a
              strong love for technology and science. I enjoy learning how
              things work and constantly explore new tools and ideas in tech.
            </p>
            <p>
              When I'm not coding, I write poems and short stories, read books,
              enjoy Formula 1, play football, and go on refreshing walks to
              reconnect with nature.
            </p>

            <div className="about-interests">
              {[
                { icon: "📚", label: "Reading" },
                { icon: "⚽", label: "Football" },
                { icon: "✍️", label: "Poetry" },
                { icon: "🎵", label: "Music" },
              ].map((interest, i) => (
                <div className="interest" key={i}>
                  <span className="interest-icon">{interest.icon}</span>
                  <span className="interest-label">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-footer">
          <blockquote className="quote">
            “Code is poetry, and every bug is just a story waiting to be
            resolved.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default About;
