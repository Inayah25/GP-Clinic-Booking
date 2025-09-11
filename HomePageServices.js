import React, { useRef } from "react";
import consultationImg from "../Images/consultation.jpg";
import vaccinationImg from "../Images/vaccination.jpeg";
import medicalCheckupImg from "../Images/medicalCheckup.jpg";
import "./HomePageServices.css";

const services = [
  {
    title: "Consultation",
    img: consultationImg,
    desc: "Our expert doctors provide one-on-one consultations to address your health concerns and guide you with personalized care.",
  },
  {
    title: "Vaccination",
    img: vaccinationImg,
    desc: "We offer a full range of vaccinations for children and adults, helping protect you and your family from preventable diseases.",
  },
  {
    title: "Medical Checkup",
    img: medicalCheckupImg,
    desc: "Comprehensive health checkups to monitor your well-being and detect potential issues early with advanced diagnostics.",
  },
];

function ServiceSlide({ title, img, desc }) {
  return (
    <div className="service-slide">
      <div className="card-left">
        <img src={img} alt={title} className="service-img" />
      </div>
      <div className="text-right">
        <h2 className="service-title">{title}</h2>
        <p className="service-desc">{desc}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const scrollerRef = useRef(null);

  const _scrollByAmount = (amount) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <main className="home-root">
      <header className="home-header">
        <h1 className="home-heading">Services</h1>
      </header>
      <section className="services-carousel" aria-label="Available services">
        <div className="slides-container" ref={scrollerRef}>
          {services.map((s) => (
            <ServiceSlide
              key={s.title}
              title={s.title}
              img={s.img}
              desc={s.desc}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
