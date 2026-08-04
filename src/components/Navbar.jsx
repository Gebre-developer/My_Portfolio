import React, { useState } from 'react';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">GS Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavToggle}
          aria-controls="navbar"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home" onClick={handleNavToggle}>Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about" onClick={handleNavToggle}>About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills" onClick={handleNavToggle}>Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects" onClick={handleNavToggle}>Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#services" onClick={handleNavToggle}>Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" onClick={handleNavToggle}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
