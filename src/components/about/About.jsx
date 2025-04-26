// components/About.jsx
import React from "react";
import My_Picture from "../../assets/images/My_Picture.png";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <img src={My_Picture} />
            </div>
          </div>
          <div className="about-text">
            <p>
              A smart, hardworking, introverted young man with a deep love for
              Technology and Science. I'm constantly curious about how things
              work and enjoy exploring new technologies and concepts.
            </p>
            <p>
              Besides coding I love writing short stories, poems and reading
              books. I also enjoy watching Formula 1 races and watching and
              playing football. I also like going out for walks to refresh
              myself and explore nature.
            </p>
            <div className="about-interests">
              <div className="interest">
                <span className="interest-icon">📚</span>
                <span>Reading</span>
              </div>
              <div className="interest">
                <span className="interest-icon">⚽</span>
                <span>Football</span>
              </div>
              <div className="interest">
                <span className="interest-icon">✍️</span>
                <span>Poetry</span>
              </div>
              <div className="interest">
                <span className="interest-icon">🎵</span>
                <span>Music</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
