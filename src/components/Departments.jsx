import React from "react";
import "./Departments.css";

const Departments = () => {
  return (
    <section className="dept-why-section">
      <div className="dept-why-container">

        {/* LEFT CARD */}
        <div className="dept-box">
          <h2>KPR Departments</h2>

          <div className="dept-cards">
            <div className="dept-card"><span>💝</span><h4>Cardiology</h4></div>
            <div className="dept-card"><span>🧠</span><h4>Neurology</h4></div>
            <div className="dept-card"><span>🦴</span><h4>Orthopedics</h4></div>
            <div className="dept-card"><span>👶</span><h4>Pediatrics</h4></div>
            <div className="dept-card"><span>🦷</span><h4>Dental Care</h4></div>
            <div className="dept-card"><span>🩺</span><h4>General Medicine</h4></div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="why-box">
          <h2>Why Choose KPR Hospital</h2>

          <p>
            We provide advanced healthcare services with experienced doctors,
            modern facilities, and compassionate patient-centered care.
          </p>

          <div className="why-points">
            <div>✔ Highly Qualified Doctors</div>
            <div>✔ 24/7 Emergency Support</div>
            <div>✔ Advanced Medical Equipment</div>
            <div>✔ Affordable Treatment</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Departments;
