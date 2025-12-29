import "./Doctors.css";
import { useNavigate } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    experience: "10 Years Experience",
    qualification: "MBBS, MD (Cardiology)",
    timing: "9:00 AM – 1:00 PM",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    specialization: "Orthopedic Specialist",
    experience: "8 Years Experience",
    qualification: "MBBS, MS (Ortho)",
    timing: "10:00 AM – 2:00 PM",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Dr. Emily Clark",
    specialization: "Pediatrician",
    experience: "6 Years Experience",
    qualification: "MBBS, MD (Pediatrics)",
    timing: "9:30 AM – 12:30 PM",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 4,
    name: "Dr. David Miller",
    specialization: "Neurologist",
    experience: "9 Years Experience",
    qualification: "MBBS, DM (Neurology)",
    timing: "11:00 AM – 4:00 PM",
    image: "https://i.pravatar.cc/150?img=21",
  },
  {
    id: 5,
    name: "Dr. Sophia Brown",
    specialization: "Gynecologist",
    experience: "7 Years Experience",
    qualification: "MBBS, MS (Gynecology)",
    timing: "10:00 AM – 1:00 PM",
    image: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 6,
    name: "Dr. James Wilson",
    specialization: "Dermatologist",
    experience: "5 Years Experience",
    qualification: "MBBS, MD (Dermatology)",
    timing: "2:00 PM – 6:00 PM",
    image: "https://i.pravatar.cc/150?img=56",
  },
  {
    id: 7,
    name: "Dr. Olivia Taylor",
    specialization: "ENT Specialist",
    experience: "6 Years Experience",
    qualification: "MBBS, MS (ENT)",
    timing: "9:00 AM – 12:00 PM",
    image: "https://i.pravatar.cc/150?img=65",
  },
  {
    id: 8,
    name: "Dr. Robert Anderson",
    specialization: "General Physician",
    experience: "12 Years Experience",
    qualification: "MBBS",
    timing: "8:30 AM – 11:30 AM",
    image: "https://i.pravatar.cc/150?img=71",
  },
  {
    id: 9,
    name: "Dr. Isabella Thomas",
    specialization: "Psychiatrist",
    experience: "8 Years Experience",
    qualification: "MBBS, MD (Psychiatry)",
    timing: "3:00 PM – 6:00 PM",
    image: "https://i.pravatar.cc/150?img=48",
  },
  {
    id: 10,
    name: "Dr. William Harris",
    specialization: "Urologist",
    experience: "11 Years Experience",
    qualification: "MBBS, MCh (Urology)",
    timing: "10:00 AM – 3:00 PM",
    image: "https://i.pravatar.cc/150?img=59",
  },
  {
  id: 11,
  name: "Dr. Kevin Martinez",
  specialization: "Oncologist",
  experience: "9 Years Experience",
  qualification: "MBBS, MD (Oncology)",
  timing: "11:00 AM – 3:00 PM",
  image: "https://i.pravatar.cc/150?img=23",
},
{
  id: 12,
  name: "Dr. Anna White",
  specialization: "Nephrologist",
  experience: "7 Years Experience",
  qualification: "MBBS, DM (Nephrology)",
  timing: "9:30 AM – 1:30 PM",
  image: "https://i.pravatar.cc/150?img=34",
},
];

export default function Doctors() {
  const navigate = useNavigate();

  return (
    <div className="doc-page">
      <aside className="doc-sidebar">
        <h3>Departments</h3>
        <ul>
          <li>Cardiology</li>
          <li>Neurology</li>
          <li>Orthopedics</li>
          <li>Pediatrics</li>
          <li>Dermatology</li>
          <li>ENT</li>
          <li>Gynecologist</li>
          <li>General Physician</li>
          <li>Urologist</li>
          <li>Psychiatrist</li>
          <li>Nephrologist</li>
        </ul>
      </aside>

      <main className="doc-content">
        <h2>KPR Doctors</h2>

        <div className="doc-grid">
          {doctors.map((doc) => (
            <div className="doc-card" key={doc.id}>
              <img src={doc.image} alt={doc.name} />
              <h4>{doc.name}</h4>
              <p className="doc-spec">{doc.specialization}</p>
              <p className="doc-exp">{doc.experience}</p>
              <p><strong>Qualification:</strong> {doc.qualification}</p>
              <p><strong>Timing:</strong> {doc.timing}</p>

              <button
                className="doc-btn"
                onClick={() => {
                  const isLoggedIn = localStorage.getItem("isLoggedIn");

                  if (!isLoggedIn) {
                    navigate("/login", { state: { doctor: doc } });
                  } else {
                    navigate("/booking", { state: doc });
                  }
                }}
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}