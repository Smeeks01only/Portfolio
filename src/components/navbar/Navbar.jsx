import React, { useState, useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from "../../hooks/useTheme";

import Smeeks from "../../assets/images/Smeeks_Logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: observe which section is currently in the viewport
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    {
      href: "#home",
      id: "home",
      label: "Home",
      icon: <HomeOutlinedIcon fontSize="small" />,
    },
    {
      href: "#about",
      id: "about",
      label: "About",
      icon: <PersonOutlineOutlinedIcon fontSize="small" />,
    },
    {
      href: "#skills",
      id: "skills",
      label: "Skills",
      icon: <CodeOutlinedIcon fontSize="small" />,
    },
    {
      href: "#projects",
      id: "projects",
      label: "Projects",
      icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    },
    {
      href: "#contact",
      id: "contact",
      label: "Contact",
      icon: <ContactMailOutlinedIcon fontSize="small" />,
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[80px] flex items-center z-[1000] transition-all duration-300 bg-transparent ${scrolled
          ? "bg-white/90 dark:bg-[#0f172a]/90 h-[70px] shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md"
          : ""
        }`}
    >
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto px-6">
        <a href="#home" className="flex items-center group z-[1001]">
          <img
            src={Smeeks}
            alt="Smeeks Logo"
            className="w-[40px] h-auto transition-transform duration-300 group-hover:rotate-[10deg] dark:invert dark:opacity-90"
          />
        </a>

        <div className="flex items-center gap-2 md:gap-4">

          {/* We moved the mobile toggle down, after the ul and theme button, so that it sits on the far right */}
          <ul
            className={`flex items-center list-none gap-8 md:flex ${menuOpen
                ? "fixed top-0 right-0 w-[75%] h-screen bg-bg-dark flex-col justify-center translate-x-0 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.1)]"
                : "fixed top-0 right-0 w-[75%] h-screen bg-bg-dark flex-col justify-center translate-x-full transition-transform duration-300 md:relative md:w-auto md:h-auto md:bg-transparent md:flex-row md:translate-x-0 md:shadow-none"
              }`}
          >
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 no-underline font-medium text-[0.95rem] transition-all duration-300 md:text-[0.95rem] text-[1.2rem] p-4 md:p-0 ${
                  activeSection === item.id
                    ? "text-primary-color md:border-b-2 md:border-primary-color md:pb-1"
                    : "text-text-dim hover:text-primary-color"
                }`}
              >
                <span className={`flex md:hidden ${activeSection === item.id ? "text-primary-color" : "text-primary-color"}`}>
                  {item.icon}
                </span>
                <span className="label">{item.label}</span>
              </a>
            </li>
          ))}

          {/* The CTA Button: Crucial for recruiters */}
          <li className="mt-5 md:mt-0">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-color text-primary-color px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-[5px] hover:bg-primary-color hover:text-white no-underline font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <FileDownloadOutlinedIcon fontSize="small" />
              <span className="label">Resume</span>
            </a>
          </li>
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center text-text-light z-[1001]"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <LightModeOutlinedIcon fontSize="small" className="text-yellow-400" /> : <DarkModeOutlinedIcon fontSize="small" />}
        </button>

        {/* Mobile Toggle */}
        <div
          className={`flex flex-col cursor-pointer gap-[6px] z-[1001] md:hidden ${menuOpen ? "active" : ""
            }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-[22px] h-[2px] bg-text-light transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
          ></span>
          <span
            className={`block w-[22px] h-[2px] bg-text-light transition-all duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`block w-[22px] h-[2px] bg-text-light transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
          ></span>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
