import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3/SCSS",
        "Tailwind CSS",
        "Figma",
      ],
    },
    {
      category: "Backend & APIs",
      items: [
        "Python",
        "Django",
        "REST APIs",
        "Node.js",
        "PostgreSQL",
        "Firebase",
      ],
    },
    {
      category: "Tools & Workflow",
      items: [
        "Git & GitHub",
        "VS Code",
        "Vercel/Netlify",
        "Postman",
        "Responsive Design",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="number">02.</span> Skills
          </h2>
          <div className="line"></div>
        </div>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div className="skill-card" key={index}>
              <div className="card-header">
                <h3>{skillGroup.category}</h3>
              </div>
              <div className="skill-tags">
                {skillGroup.items.map((skill, i) => (
                  <span className="skill-tag" key={i}>
                    {skill}
                  </span>
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
