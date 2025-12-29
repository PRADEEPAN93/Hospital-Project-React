import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>About Our Hospital</h1>

        <p className="about-intro">
          Our Hospital Management System is designed to provide high-quality,
          patient-centered healthcare services with modern technology and
          experienced medical professionals.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🏥 Our Mission</h3>
            <p>
              To deliver affordable, reliable, and compassionate healthcare
              services to all patients.
            </p>
          </div>

          <div className="about-card">
            <h3>👨‍⚕️ Expert Doctors</h3>
            <p>
              Our hospital has highly qualified doctors with years of clinical
              experience.
            </p>
          </div>

          <div className="about-card">
            <h3>🩺 Advanced Care</h3>
            <p>
              We use modern medical equipment and advanced treatment methods to
              ensure patient safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
