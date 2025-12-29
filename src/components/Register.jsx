import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginRegister.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // save user for local
    localStorage.setItem("user", JSON.stringify(form));

    alert("Welcome to KPR Hospital. Please login");
    navigate("/login");
  };

  return (
    <div className="lr-page">
      <div className="lr-card">
        <h2>Register</h2>

        <form onSubmit={handleRegister}>
          <div className="lr-group">
            <label>Full Name</label>
            <input
              type="text"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="lr-group">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="lr-group">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <div className="lr-group">
            <label>Confirm Password</label>
            <input
              type="password"
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
          </div>

          <button className="lr-btn">Register</button>

          <p className="lr-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
