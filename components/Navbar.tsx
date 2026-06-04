"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Sports", href: "#sports" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="global-nav">
      <div className="global-nav-container">
        <a 
          href="#hero" 
          className="text-nav-link text-on-dark" 
          onClick={(e) => handleNavClick(e, "#hero")}
          style={{ opacity: 0.8 }}
        >
          Affan Ali
        </a>
        <ul className="global-nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="text-nav-link text-on-dark" 
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a
            href="#contact"
            className="button-dark-utility"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
