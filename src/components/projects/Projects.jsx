import React from "react";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

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
    <section id="projects" className="py-[100px] bg-bg-dark font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex items-center mb-10">
          <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-bold text-text-light flex items-center">
            <span className="text-primary-color font-mono text-xl mr-2 font-normal">03.</span> Projects
          </h2>
          <div className="h-[1px] bg-[#233554] w-[300px] ml-5 block md:w-[200px] sm:w-[100px]"></div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-12">
          {projects.map((project, index) => (
            <div className="bg-bg-light p-8 rounded-lg transition-all duration-[250ms] flex flex-col h-full border border-transparent hover:-translate-y-2 hover:border-primary-color hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] group" key={index}>
              <div className="flex justify-between items-center mb-8">
                <div className="text-primary-color">
                  <FolderOpenIcon fontSize="large" />
                </div>
                <div className="flex items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-light ml-2.5 transition-colors duration-200 hover:text-primary-color"
                  >
                    <GitHubIcon />
                  </a>
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-light ml-2.5 transition-colors duration-200 hover:text-primary-color"
                    >
                      <LaunchIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-text-light text-[1.4rem] font-bold mb-2.5 group-hover:text-primary-color">{project.title}</h3>

              <div className="text-text-dim text-base leading-[1.6] flex-grow">
                <p>{project.description}</p>
              </div>

              <ul className="flex flex-wrap list-none p-0 mt-5 gap-4">
                {project.tech.map((tech, i) => (
                  <li className="font-mono text-[0.85rem] text-text-dim" key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* "See More" Button at the bottom instead of a card */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://github.com/Smeeks01only"
            className="px-6 py-3 rounded text-primary-color border border-primary-color text-sm transition-all duration-300 hover:bg-primary-color/10 hover:-translate-y-1 no-underline font-mono"
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
