import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa fa-paint-brush",
      title: "GAMING & ANIME ART",
      desc: "Creating captivating gaming characters, anime art, and immersive posters that bring virtual worlds to life, making each frame unforgettable.",
      active: false,
    },
    {
      icon: "fas fa-video",
      title: "MOTION & GRAPHIC DESIGN",
      desc: "Designing engaging 2D/3D videos, live stream posters, and video intros/outros that leave a lasting impression through compelling visual storytelling.",
      active: true,
    },
    {
      icon: "fas fa-globe",
      title: "WEB DEVELOPMENT",
      desc: "Designing and developing responsive, user-friendly websites with modern technologies to enhance online presence and user engagement.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>12</h3>
            <p>Years Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>50+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>12</h4>
              <p>Year Experience</p>
            </div>
            <div className="portfolio">
              <h4>108+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>16</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
