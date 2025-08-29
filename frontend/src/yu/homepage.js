import React from "react";
import "./homepage.css";

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

const Homepage = () => {
  const handleNavClick = (label) => {
    // simple smooth scroll to anchors
    const el = document.querySelector(label);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDoctorClick = (name) => {
    alert(`You selected ${name}`);
    localStorage.setItem("selectedDoctor", name);
  };

  const handleBookAppointment = () => {
  // Redirect user to appointment page
  window.location.href = "/appointment";
};


  const handleLogin = () => alert("Redirecting to login page...");
  const handleSignup = () => alert("Redirecting to signup page...");

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
          <button id="loginBtn" onClick={handleLogin}>Login</button>
          <button id="signupBtn" onClick={handleSignup}>Sign Up</button>
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
      <div className="doctor-list">
        <div className="doctor-card" onClick={() => handleDoctorClick("Doctor 1")} data-name="Doctor 1">
          Doctor 1
        </div>
        <div className="doctor-card" onClick={() => handleDoctorClick("Doctor 2")} data-name="Doctor 2">
          Doctor 2
        </div>
        <div className="doctor-card" onClick={() => handleDoctorClick("Doctor 3")} data-name="Doctor 3">
          Doctor 3
        </div>
      </div>

      <div className="cards-note">Something to say about the doctors?</div>

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

      {/* ===== Footer strip ===== */}
      <footer id="contact">Why Choose Us? | Info</footer>
    </div>
  );
};

export default Homepage;
