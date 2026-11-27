import React, { useState, useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from "../../hooks/useTheme";

import Smeeks from "../../assets/images/Smeeks_Logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDarkMode, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

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

  const glassPill = `glass-surface transition-all duration-300 ${
    scrolled ? "glass-surface-scrolled" : ""
  }`;

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
      icon: <EmailOutlinedIcon fontSize="small" />,
    },
  ];

  return (
    <nav className="fixed top-4 left-0 w-full z-[1000] px-4 sm:px-6 pointer-events-none">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto gap-3">
        {/* Detached Logo Pill */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full group z-[1001] hover:scale-105 ${glassPill}`}
          aria-label="Home"
        >
          <img
            src={Smeeks.src}
            alt="Smeeks Logo"
            className="w-[26px] h-auto transition-transform duration-300 group-hover:rotate-[10deg] dark:invert dark:opacity-90"
          />
        </a>

        {/* Detached Center Nav Pill (Desktop) */}
        <ul
          className={`pointer-events-auto hidden md:flex items-center list-none gap-1 px-2 py-1.5 rounded-full ${glassPill}`}
        >
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`flex items-center gap-2 no-underline font-medium text-[0.9rem] px-4 py-2 rounded-full transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-black/[0.08] dark:bg-white/[0.15] text-text-light font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
                    : "text-text-dim hover:text-text-light hover:bg-black/[0.04] dark:hover:bg-white/[0.07]"
                }`}
              >
                <span className="label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Detached Right Pills (Theme Toggle + Mobile Menu Toggle) */}
        <div className="pointer-events-auto flex items-center gap-2.5 z-[1001]">
          <button
            onClick={toggleTheme}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-text-light hover:scale-105 ${glassPill}`}
            aria-label="Toggle Dark Mode"
          >
            {mounted ? (
              isDarkMode ? (
                <LightModeOutlinedIcon fontSize="small" className="text-text-light" />
              ) : (
                <DarkModeOutlinedIcon fontSize="small" className="text-text-light" />
              )
            ) : (
              <span className="w-5 h-5 inline-block" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            className={`w-12 h-12 rounded-full flex flex-col items-center justify-center cursor-pointer gap-[5px] md:hidden hover:scale-105 ${glassPill}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-[18px] h-[2px] bg-text-light rounded-full transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            ></span>
            <span
              className={`block w-[18px] h-[2px] bg-text-light rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-[18px] h-[2px] bg-text-light rounded-full transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Floating Glass Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden pointer-events-auto z-[999]"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <ul
        className={`md:hidden fixed top-20 right-4 w-[calc(100%-2rem)] max-w-[280px] rounded-3xl p-3 list-none flex flex-col gap-1 z-[1000] transition-all duration-300 origin-top-right ${glassPill} ${
          menuOpen
            ? "pointer-events-auto opacity-100 scale-100 translate-y-0"
            : "pointer-events-none opacity-0 scale-95 -translate-y-2"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 no-underline font-medium text-[1rem] px-4 py-3 rounded-2xl transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-black/[0.08] dark:bg-white/[0.15] text-text-light font-semibold"
                  : "text-text-dim hover:text-text-light hover:bg-black/[0.04] dark:hover:bg-white/[0.07]"
              }`}
            >
              <span className="flex text-primary-color">{item.icon}</span>
              <span className="label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
