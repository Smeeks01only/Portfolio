import React, { useState, useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import Smeeks from "../../assets/images/Smeeks_Logo.png";
import "./Navbar.css";

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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="logo">
          {/* If logo is black, invert makes it white. If it's already white, remove 'filter' in CSS */}
          <img src={Smeeks} alt="Smeeks Logo" className="logo-img" />
        </a>

        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="nav-link"
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </a>
            </li>
          ))}

          {/* The CTA Button: Crucial for recruiters */}
          <li className="resume-item">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              onClick={() => setMenuOpen(false)}
            >
              <span className="icon">
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
