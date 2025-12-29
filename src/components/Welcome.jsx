import React from "react";
import "./Welcome.css";
import hospitalImg from "../assets/welcome.jpg";

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div
        className="welcome-hero"
        style={{ backgroundImage: `url(${hospitalImg})` }}
      >
        <div className="welcome-overlay">
          <div className="container"> 
            {/* Added a container div for strict alignment */}
            <h1>Welcome To KPR Hospital</h1>
            <p className="welcome-description">
              We are committed to delivering high-quality healthcare services with
              compasson and excellence. Our experienced doctors, modern medical
              facilities, and patient-centered approach ensure safe, reliable,
              and affordable treatment for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;