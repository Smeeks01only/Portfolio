// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Smeeks from "../../assets/images/Smeeks_Logo.png"
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    // { href: "#home", label: "Home", icon: <HomeIcon /> },
    { href: "#about", label: "About", icon: <InfoIcon /> },
    { href: "#skills", label: "Skills", icon: <BuildIcon /> },
    { href: "#projects", label: "Projects", icon: <WorkIcon /> },
    { href: "#footer", label: "Contact", icon: <ContactMailIcon /> },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="logo">
          <img src={Smeeks} alt="Logo" className="logo-img" />
        </a>

        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
