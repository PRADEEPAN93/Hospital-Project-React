import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* LEFT: Logo */}
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-icon">+</span>
          KPR Hospital Management System
        </div>
      </div>

      {/* MOBILE HAMBURGER */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "bar rotate1" : "bar"}></div>
        <div className={isOpen ? "bar fade" : "bar"}></div>
        <div className={isOpen ? "bar rotate2" : "bar"}></div>
      </div>

      {/* RIGHT: Menu + Login */}
      <div className={`navbar-right ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
          <li><Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link></li>
          <li><Link to="/doctors" onClick={() => setIsOpen(false)}>Doctors</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        </ul>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
