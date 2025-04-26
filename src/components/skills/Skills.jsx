// components/Skills.jsx
import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      category: "Programming & Frameworks",
      items: ["Python", "JavaScript", "Java", "HTML/CSS", "React", "Django"],
    },
    {
      category: "Design",
      items: ["Figma", "Adobe Illustrator", "UI/UX Design", "Vector Graphics"],
    },
    {
      category: "Other",
      items: ["Git/GitHub", "Responsive Design", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div className="skill-group" key={index}>
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    <div className="skill-name">{skill}</div>
                    <div className="skill-bar">
                      <div
                        className="skill-level"
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
