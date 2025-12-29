import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-about">
          <h3>Hospital Management System</h3>
          <p>
            Providing quality healthcare services with experienced doctors and
            advanced medical facilities.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/booking">Booking</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@hospital.com</p>
          <p>Phone: +91 8489244190</p>
          <p>Address: Chennai, Tamil Nadu</p>
        </div>

        {/* MAP */}
        <div className="footer-map">
          <h4>KPR Location</h4>
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps?q=chennai&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Hospital Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
