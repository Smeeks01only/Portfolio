import React, { useState, useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import Smeeks from "../../assets/images/Smeeks_Logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    {
      href: "#home",
      label: "Home",
      icon: <HomeOutlinedIcon fontSize="small" />,
    },
    {
      href: "#about",
      label: "About",
      icon: <PersonOutlineOutlinedIcon fontSize="small" />,
    },
    {
      href: "#skills",
      label: "Skills",
      icon: <CodeOutlinedIcon fontSize="small" />,
    },
    {
      href: "#projects",
      label: "Projects",
      icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    },
    {
      href: "#contact",
      label: "Contact",
      icon: <ContactMailOutlinedIcon fontSize="small" />,
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[80px] flex items-center z-[1000] transition-all duration-300 bg-transparent ${scrolled
          ? "bg-[#0a192f] bg-opacity-85 h-[70px] shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] backdrop-blur-md"
          : ""
        }`}
    >
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto px-6">
        <a href="#home" className="flex items-center group">
          <img
            src={Smeeks}
            alt="Smeeks Logo"
            className="w-[45px] h-auto invert brightness-200 transition-transform duration-300 group-hover:rotate-[10deg]"
          />
        </a>

        {/* Mobile Toggle */}
        <div
          className={`flex flex-col cursor-pointer gap-[6px] z-[1001] md:hidden ${menuOpen ? "active" : ""
            }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-[25px] h-[2px] bg-primary-color transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
          ></span>
          <span
            className={`block w-[25px] h-[2px] bg-primary-color transition-all duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`block w-[25px] h-[2px] bg-primary-color transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
          ></span>
        </div>

        <ul
          className={`flex items-center list-none gap-8 md:flex ${menuOpen
              ? "fixed top-0 right-0 w-[75%] h-screen bg-bg-light flex-col justify-center translate-x-0 shadow-[-10px_0_30px_-15px_rgba(2,12,27,0.7)]"
              : "fixed top-0 right-0 w-[75%] h-screen bg-bg-light flex-col justify-center translate-x-full transition-transform duration-300 md:relative md:w-auto md:h-auto md:bg-transparent md:flex-row md:translate-x-0 md:shadow-none"
            }`}
        >
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 no-underline text-text-light font-medium text-[0.95rem] transition-colors duration-300 hover:text-primary-color md:text-[0.95rem] text-[1.2rem] p-4 md:p-0"
              >
                <span className="flex text-primary-color md:hidden">
                  {item.icon}
                </span>
                <span className="label">{item.label}</span>
              </a>
            </li>
          ))}

          {/* The CTA Button: Crucial for recruiters */}
          <li className="mt-5 md:mt-0">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-color text-primary-color px-4 py-2 rounded text-sm transition-all duration-300 flex items-center gap-[5px] hover:bg-primary-color/10 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              <span className="flex text-primary-color md:hidden">
                <DescriptionOutlinedIcon fontSize="small" />
              </span>
              <span className="label">Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
