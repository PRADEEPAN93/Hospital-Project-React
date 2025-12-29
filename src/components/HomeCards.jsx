import React from "react";
import "./HomeCards.css";

const HomeCards = () => {
  return (
    <section className="home-cards">
      <div className="cards-container">

        <div className="card">
          <div className="card-icon">➕</div>
          <h3>Services</h3>
          <p>Explore our medical services and departments.</p>
        </div>

        <div className="card">
          <div className="card-icon">👨‍⚕️</div>
          <h3>Doctors</h3>
          <p>Meet our experienced and qualified doctors.</p>
        </div>

        <div className="card">
          <div className="card-icon">📞</div>
          <h3>Contact</h3>
          <p>Book appointments and contact our support team.</p>
        </div>

      </div>
    </section>
  );
};

export default HomeCards;
