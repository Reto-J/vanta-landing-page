import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="navbar__logo" onClick={closeMenu}>
        VANTA
      </a>

      <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        <a href="#features" onClick={closeMenu}>
          Features
        </a>

        <a href="#solutions" onClick={closeMenu}>
          Solutions
        </a>

        <a href="#pricing" onClick={closeMenu}>
          Pricing
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>
      </nav>

      <a href="#cta" className="navbar__button" onClick={closeMenu}>
        Get Started <span>↗</span>
      </a>

      <button
        className="navbar__menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}

export default Navbar;