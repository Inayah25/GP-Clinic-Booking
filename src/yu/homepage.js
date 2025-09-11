import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Label,
} from "recharts";
import rawData from "./healthcare.json";



// ✅ Replace these paths with where your images actually live
import consultationImg from "../Images/consultation.jpg";
import vaccinationImg from "../Images/vaccination.jpeg";
import medicalCheckupImg from "../Images/medicalCheckup.jpg";

const services = [
  {
    title: "Consultation",
    img: consultationImg,
    desc:
      "Our expert doctors provide one-on-one consultations to address your health concerns and guide you with personalized care.",
  },
  {
    title: "Vaccination",
    img: vaccinationImg,
    desc:
      "We offer a full range of vaccinations for children and adults, helping protect you and your family from preventable diseases.",
  },
  {
    title: "Medical Checkup",
    img: medicalCheckupImg,
    desc:
      "Comprehensive health checkups to monitor your well-being and detect potential issues early with advanced diagnostics.",
  },
];
const diseases = ["Hipertension", "Diabetes", "Alcoholism", "Handcap"];

const ageGroups = [
  { label: "5-12", min: 5, max: 12 },
  { label: "13-20", min: 13, max: 20 },
  { label: "21-40", min: 21, max: 40 },
  { label: "41-60", min: 41, max: 60 },
  { label: "60+", min: 61, max: 200 },
];

const genderData = diseases.map((disease) => {
  const maleCount = rawData.filter(
    (item) => item.Gender === "M" && item[disease] === true
  ).length;
  const femaleCount = rawData.filter(
    (item) => item.Gender === "F" && item[disease] === true
  ).length;
  return { name: disease, Male: maleCount, Female: femaleCount };
});

const ageGroupData = ageGroups.map(({ label, min, max }) => {
  const groupItems = rawData.filter(
    (item) => item.Age >= min && item.Age <= max && item.Age >= 5
  );
  const entry = { name: label };
  diseases.forEach((disease) => {
    entry[disease] = groupItems.filter((item) => item[disease] === true).length;
  });
  return entry;
});

const colors = {
  cardBg: "#ffffff",
  textSubtle: "#334155",
  border: "#e2e8f0",
  barColors: ["#5da5f9", "#f98c5d", "#2b6cc4", "#1a4b8a", "#3e8f56", "#ffbf00"],
};

const Homepage = () => {
  const navigate = useNavigate();
  const handleNavClick = (label) => {
    // simple smooth scroll to anchors
    const el = document.querySelector(label);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  //const handleDoctorClick = (name) => {
    //alert(`You selected ${name}`);
    //localStorage.setItem("selectedDoctor", name);
  //};

  const handleBookAppointment = () => {
    navigate("/form");
  };


  const handleLogin = () => alert("Redirecting to login page...");
  /*const handleSignup = () => alert("Redirecting to signup page...");*/

  return (
    <div>
      {/* ===== Navigation ===== */}
      <nav className="topbar">
        <div className="links">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}>Home</a>
          <a href="#service" onClick={(e) => { e.preventDefault(); handleNavClick("#service"); }}>Service</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}>Contact Us</a>
          <a href="#appointment" onClick={(e) => { e.preventDefault(); handleNavClick("#appointment"); }}>Appointment</a>
        </div>
        <div className="auth-buttons">
          <button id="loginBtn" onClick={handleLogin}>Login or SignUp </button>
          
        </div>
      </nav>

      {/* ===== Title / Logo ===== */}
      <div className="logo" id="home">
        <h1>GP CLINIC</h1>
      </div>

      {/* ===== Operating Hours ===== */}
      <section className="operating-hours" aria-label="Operating hours">
        <h2>Operating Hours?</h2>
        <p>Info about hours</p>
      </section>

      {/* ===== Doctor Cards ===== */}
      {/* <div className="doctor-list">
        <div className="doctor-card" onClick={() => handleDoctorClick("Doctor 1")} data-name="Doctor 1">
          Doctor 1
        </div>
        <div className="doctor-card" onClick={() => handleDoctorClick("Doctor 2")} data-name="Doctor 2">
          Doctor 2
        </div>
        <div className="doctor-card" onClick={() => handleDoctorClick("Doctor 3")} data-name="Doctor 3">
          Doctor 3
        </div>
      </div> */ }

      {/*<div className="cards-note">Something to say about the doctors?</div> */ }

      {/* ===== Book Appointment ===== */}
      <div className="appointment" id="appointment">
        <button id="bookBtn" onClick={handleBookAppointment}>
          Book Appointment
        </button>
      </div>

      {/* ===== Services (below the button) ===== */}
      <section className="services-section" id="service" aria-label="Available services">
        <h2 className="services-heading">Services</h2>

        {/* Rounded dark gradient container like the mockup */}
        <div className="services-band">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-card-top">
                <img src={s.img} alt={s.title} />
              </div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ===== Health Dashboard (below Services) ===== */}
      <section className="dashboard-section" id="health-dashboard" aria-label="Health Dashboard">
        <h2 className="dashboard-heading">Health Dashboard</h2>

        <div className="dashboard-band">
          {/* Gender Graph */}
          <div className="dash-card">
            <h3 className="dash-title">Gender Comparison</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={genderData} margin={{ top: 20, bottom: 30 }}>
                <XAxis dataKey="name" fontSize={11}>
                  <Label value="Diseases" offset={-10} position="insideBottom" />
                </XAxis>
                <YAxis fontSize={11}>
                  <Label
                    value="Number of Patients"
                    angle={-90}
                    position="insideLeft"
                    offset={10}
                    fontSize={11}
                  />
                </YAxis>
                <Tooltip />
                <Legend verticalAlign="top" />
                <Bar dataKey="Female" fill={colors.barColors[1]} />
                <Bar dataKey="Male" fill={colors.barColors[0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Age Group Graph */}
          <div className="dash-card">
            <h3 className="dash-title">Diseases by Age Group</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={ageGroupData} margin={{ bottom: 30 }}>
                <XAxis dataKey="name" fontSize={11}>
                  <Label value="Age Groups" offset={-10} position="insideBottom" />
                </XAxis>
                <YAxis fontSize={11}>
                  <Label
                    value="Number of Patients"
                    angle={-90}
                    position="insideLeft"
                    offset={10}
                    fontSize={11}
                  />
                </YAxis>
                <Tooltip />
                <Legend verticalAlign="top" />
                {diseases.map((disease, i) => (
                  <Bar
                    key={disease}
                    dataKey={disease}
                    stackId="a"
                    fill={colors.barColors[i % colors.barColors.length]}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Description */}
          <div className="dash-card dash-text">
            <h3 className="dash-title">Description</h3>
            <p>
              This dashboard compares gender distribution and the prevalence of
              Hipertension, Diabetes, Alcoholism, and Handcap across different age groups.
              Hover over the bars to explore detailed patient demographics and trends.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Footer strip ===== */}
       {/* <footer id="contact">Why Choose Us? | Info</footer>*/}
            {/* ===== Why Choose Us Section ===== */}
      <section className="why-section" id="why-us">
        <h2 className="why-heading">Why Choose Us?</h2>
        <div className="why-band">
          <div className="why-card">
            <h3>Experienced Doctors</h3>
            <p>
              Our clinic is staffed with highly qualified doctors who bring years of 
              expertise in general practice and patient care.
            </p>
          </div>
          <div className="why-card">
            <h3>Modern Facilities</h3>
            <p>
              We use advanced diagnostic equipment and a modern facility to ensure 
              safe, reliable, and accurate health assessments.
            </p>
          </div>
          <div className="why-card">
            <h3>Patient-Centered Care</h3>
            <p>
              Every patient is unique. We focus on personalized treatment plans that 
              prioritize your health and long-term wellness.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
