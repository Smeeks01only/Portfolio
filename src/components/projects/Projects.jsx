// components/Projects.jsx
import React from "react";
import { GitHub, Visibility } from "@mui/icons-material";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Campus Sports Blog Web App",
      description:
        "A dynamic blog platform for campus sports news and updates built with Django.",
      tech: ["Python", "Django", "HTML/CSS"],
      image: "sports-blog",
    },
    {
      title: "Instagram Clone",
      description:
        "A functional replica of Instagram featuring posting, following, and interaction capabilities.",
      tech: ["React", "JavaScript", "CSS"],
      image: "instagram-clone",
    },
    {
      title: "Tesla Website Clone",
      description:
        "Pixel-perfect recreation of Tesla's website with responsive design and animations.",
      tech: ["React", "JavaScript", "CSS", "React Router"],
      image: "tesla-clone",
    },
    {
      title: "Engineering Company Website",
      description:
        "Professional website designed for a local engineering firm to showcase services and projects.",
      tech: ["ReactJS", "HTML", "CSS", "JavaScript"],
      image: "engineering-site",
    },

    {
      title: "Tinashe's ChatBot",
      description:
        " A chatbot built with ReactJS and API, designed to answer questions you would like to ask.",
      tech: ["ReactJS", "JavaScript"],
      image: "chatbot",
    },

    {
      title: "See More Projects",
      description: "Click her to check out more of my work on GitHub.",
      tech: ["GitHub"],
      image: "see-more",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card ${
                project.title === "See More Projects"
                  ? "see-more"
                  : project.image
              }`}
              key={index}
              onClick={() => {
                if (project.title === "See More Projects") {
                  window.open("https://github.com/Smeeks01only", "_blank");
                }
              }}
              style={{
                cursor:
                  project.title === "See More Projects" ? "pointer" : "default",
              }}
            >
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.title !== "See More Projects" && (
                  <div className="project-actions">
                    <a
                      href="https://github.com/Smeeks01only"
                      className="icon-button"
                      title="Source Code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
