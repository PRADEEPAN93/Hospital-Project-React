import "./Appointment.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

/* SAME DOCTOR LIST (from Doctors.jsx) */
const doctors = [
  { id: 1, name: "Dr. John Doe", specialization: "Cardiology" },
  { id: 2, name: "Dr. Michael Lee", specialization: "Orthopedics" },
  { id: 3, name: "Dr. Emily Clark", specialization: "Pediatrics" },
  { id: 4, name: "Dr. David Miller", specialization: "Neurology" },
  { id: 5, name: "Dr. Sophia Brown", specialization: "Gynecology" },
  { id: 6, name: "Dr. James Wilson", specialization: "Dermatology" },
  { id: 7, name: "Dr. Olivia Taylor", specialization: "ENT" },
  { id: 8, name: "Dr. Robert Anderson", specialization: "General Physician" },
  { id: 9, name: "Dr. Isabella Thomas", specialization: "Psychiatry" },
  { id: 10, name: "Dr. William Harris", specialization: "Urology" },
];

export default function Appointment() {
  const location = useLocation();
  const selectedDoctor = location.state;

  const [department, setDepartment] = useState(
    selectedDoctor?.specialization || ""
  );
  const [doctor, setDoctor] = useState(selectedDoctor?.name || "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const filteredDoctors = doctors.filter(
    (doc) => doc.specialization === department
  );

  const handleConfirm = () => {
    if (!department || !doctor || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    const appointment = {
      department,
      doctor,
      date,
      time,
      status: "Pending",
    };

    const oldAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    localStorage.setItem(
      "appointments",
      JSON.stringify([...oldAppointments, appointment])
    );

    alert("Appointment booked successfully ✅");
  };

  return (
    <div className="appt-layout">
      {/* SIDEBAR */}
      <aside className="appt-sidebar">
        <h3>Dashboard</h3>
        <ul>
          <li className="active">Book Appointment</li>
          <li>My Appointments</li>
          <li>Medical History</li>
          <li>Profile</li>
        </ul>
      </aside>

      {/* MAIN */}
      <main className="appt-main">
        <h2>Book an Appointment</h2>

        <div className="appt-form-box">
          <div className="appt-row">
            <label>Choose Department</label>
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctor("");
              }}
            >
              <option value="">Select</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Dermatology</option>
              <option>ENT</option>
              <option>Gynecology</option>
              <option>General Physician</option>
              <option>Psychiatry</option>
              <option>Urology</option>
            </select>
          </div>

          <div className="appt-row">
            <label>Select Doctor</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
            >
              <option value="">Select</option>
              {filteredDoctors.map((doc) => (
                <option key={doc.id}>{doc.name}</option>
              ))}
            </select>
          </div>

          <div className="appt-row two-col">
            <div>
              <label>Appointment Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label>Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="appt-row">
            <label>Status</label>
            <input type="text" value="Pending" disabled />
          </div>

          <button className="appt-confirm-btn" onClick={handleConfirm}>
            Confirm Appointment
          </button>
        </div>
      </main>
    </div>
  );
}
