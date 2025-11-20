import React from "react";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Campus Sports Blog",
      description:
        "A full-stack blog platform for university sports news. Built with a Django backend and a responsive template engine.",
      tech: ["Django", "Python", "PostgreSQL"],
      githubLink: "https://github.com/Smeeks01only/sports-blog",
      liveLink: "#", // Add live link if you have one
    },
    {
      title: "Instagram Clone",
      description:
        "A functional replica of Instagram's core features including image uploads, likes, and user authentication.",
      tech: ["React", "Firebase", "Tailwind"],
      githubLink: "https://github.com/Smeeks01only",
      liveLink: "#",
    },
    {
      title: "Tesla UI Clone",
      description:
        "Pixel-perfect recreation of the Tesla landing page, focusing on smooth animations and responsive layout.",
      tech: ["React", "Framer Motion", "CSS"],
      githubLink: "https://github.com/Smeeks01only",
      liveLink: "#",
    },
    {
      title: "AI ChatBot",
      description:
        "An intelligent conversational agent integrated with the OpenAI API to assist users with general queries.",
      tech: ["React", "OpenAI API", "Node.js"],
      githubLink: "https://github.com/Smeeks01only",
      liveLink: "#",
    },
    // Tip: Add a project that solves a ZIMBABWEAN problem here if you can!
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="number">03.</span> Projects
          </h2>
          <div className="line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-top">
                <div className="folder-icon">
                  <FolderOpenIcon fontSize="large" />
                </div>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LaunchIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>

              <div className="project-desc">
                <p>{project.description}</p>
              </div>

              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* "See More" Button at the bottom instead of a card */}
        <div className="show-more-container">
          <a
            href="https://github.com/Smeeks01only"
            className="btn primary"
            target="_blank"
            rel="noreferrer"
          >
            View Full Project Archive
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
