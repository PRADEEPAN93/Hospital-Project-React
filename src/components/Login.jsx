import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LoginRegister.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please register first");
      navigate("/register");
      return;
    }

    if (email === user.email && password === user.password) {
      localStorage.setItem("isLoggedIn", "true");

      const from = location.state?.from?.pathname;
      const doctor = location.state?.doctor;

      if (doctor) {
        navigate("/booking", { state: doctor });
      } else if (from) {
        navigate(from);
      } else {
        navigate("/");
      }
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="lr-page">
      <div className="lr-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <div className="lr-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="lr-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="lr-btn" type="submit">
            Login
          </button>

          <p className="lr-text">
            Don’t have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
