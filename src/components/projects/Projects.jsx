import React from "react";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

function Projects() {
  const projects = [
     {
      title: "Job Tracker",
      description:
        "A sleek, full-stack application that helps job seekers organize, track, and manage their applications and interviews all in one place.",
      tech: ["React", "Tailwind CSS","Python", "Django", "PostgreSQL"],
      githubLink: "https://github.com/Smeeks01only/JobTracker_AI",
      liveLink: "https://job-tracker-ai-six.vercel.app", 
    },
     {
      title: "Personal Finance Manager",
      description:
        "A comprehensive full-stack web application that helps users track expenses, manage budgets, and set financial goals. Features interactive data visualizations and secure JWT authentication.",
      tech: ["React", "Django", "PostgreSQL", "Recharts"],
      githubLink: "https://github.com/Smeeks01only/Personal-Finance-Manager",
      liveLink: "https://personal-finance-manager-two-ivory.vercel.app",
    },
     {
      title: "Currency Exchange Rates Web App ",
      description:
        "A frontend React application built with Vite that integrates with European Central Bank data to deliver accurate, daily-updated currency exchange rates and historical trends.",
      tech: ["React", "Vite", "REST API", "Recharts"],
      githubLink: "https://github.com/Smeeks01only/currency-exchange-rates",
      liveLink: "https://currency-exchange-rates-tau.vercel.app", // Add live link if you have one
    },
    {
      title: "The Smeeks Bot",
      description:
        "A sleek, full-stack conversational AI agent with built-in memory. Features a responsive React UI and a Django backend powered by the lightning-fast Groq API.",
      tech: ["React", "Django", "Groq API", "SQLite", "Vite"],
      githubLink: "https://github.com/Smeeks01only/The-Smeeks-Bot",
      liveLink: "https://the-smeeks-bot.pages.dev",
    },

     {
      title: "Campus Sports Blog",
      description:
        "A full-stack blog platform for university sports news. Built with a Django backend and a responsive template engine.",
      tech: ["Django", "Python", "PostgreSQL"],
      githubLink: "https://github.com/Smeeks01only/sports-blog",
      liveLink: "#", // Add live link if you have one
    },
    {
      title: "View More Projects",
      description:
        "To view more projects and my full archive of open-source contributions, click here.",
      tech: [],
      githubLink: "https://github.com/Smeeks01only",
      liveLink: "https://github.com/Smeeks01only",
    },
  ];

  return (
    <section id="projects" className="py-[100px] bg-bg-light font-sans">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <div className="flex items-center mb-10">
          <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-bold text-text-light flex items-center whitespace-nowrap">
            <span className="text-primary-color font-mono text-xl mr-2 font-normal">03.</span> Projects
          </h2>
          
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-5 mt-12">
          {projects.map((project, index) => (
            <a
              href={project.liveLink !== "#" ? project.liveLink : project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-dark p-8 rounded-xl transition-all duration-[250ms] flex flex-col h-full border border-gray-100 dark:border-gray-800 hover:-translate-y-2 hover:border-primary-color hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] group no-underline cursor-pointer"
              key={index}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-primary-color">
                  <FolderOpenIcon fontSize="large" />
                </div>
                <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-dim ml-2.5 transition-colors duration-200 hover:text-primary-color"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GitHubIcon />
                  </a>
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-dim ml-2.5 transition-colors duration-200 hover:text-primary-color"
                      onClick={(e) => e.stopPropagation()}
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
                  <li className="font-mono text-[0.85rem] text-text-dim bg-primary-color/5 px-3 py-1 rounded-full" key={i}>{tech}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
