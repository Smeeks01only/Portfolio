import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <footer className="bg-bg-dark py-10 text-center flex flex-col items-center gap-5 font-sans">
      <div className="flex gap-6 mb-2.5">
        <a
          href="https://github.com/Smeeks01only"
          target="_blank"
          rel="noreferrer"
          className="text-text-dim transition-all duration-300 hover:text-primary-color hover:-translate-y-[3px]"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/tinashe-dzikiti-a660092a2"
          target="_blank"
          rel="noreferrer"
          className="text-text-dim transition-all duration-300 hover:text-primary-color hover:-translate-y-[3px]"
        >
          <LinkedInIcon />
        </a>
        <a href="https://x.com/_T_Basil" target="_blank" rel="noreferrer" className="text-text-dim transition-all duration-300 hover:text-primary-color hover:-translate-y-[3px]">
          <XIcon />
        </a>
      </div>

      <div className="flex flex-col items-center">
        <a
          href="https://github.com/Smeeks01only/portfolio-v1"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-text-dim text-[0.9rem] no-underline transition-colors duration-300 block mb-2.5 hover:text-primary-color"
        >
          Designed & Built by Tinashe B Dzikiti
        </a>
        <p className="text-[#54607a] text-[0.8rem]">
          &copy; {new Date().getFullYear()} Harare, Zimbabwe
        </p>
      </div>
    </footer>
  );
}

export default Footer;
