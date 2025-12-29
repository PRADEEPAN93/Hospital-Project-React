import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LEFT: Logo */}
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-icon">+</span>
           KPR Hospital Management System
        </div>
      </div>

      {/* RIGHT: Menu + Login */}
      <div className="navbar-right">
        <ul className="nav-links">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
