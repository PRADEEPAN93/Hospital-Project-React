import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./Pages/Home";
import About from "./Pages/About";
import TopScroll from "./components/TopScroll";

function App() {
  return (
    <BrowserRouter>
      <TopScroll />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Booking Route */}
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
