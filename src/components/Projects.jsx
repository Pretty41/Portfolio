/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Fantasy Anime Character Design",
      img: "/projects/13.jpg",
      gLink: "",
      lLink: "",
    },
    {
      title: "3D Animated Video Intro",
      img: "/projects/2.webp",
      gLink: "",
      lLink: "",
    },
    {
      title: "Responsive Salon Management System",
      img: "/projects/3.webp",
      gLink: "",
      lLink: "",
    },
    {
      title: "Epic Gaming Poster Series",
      img: "/projects/4.webp",
      gLink: "",
      lLink: "",
    },
    {
      title: "Live Stream Outro Designs",
      img: "/projects/5.webp",
      gLink: "",
      lLink: "",
    },
    {
      title: "Explainer 2D",
      img: "/projects/6.webp",
      gLink: "",
      lLink: "",
    },
    {
      title: "Elemental Mage in Action",
      img: "/projects/7.webp",
      gLink: "",
      lLink: "",
    },
    {
      title: "Cyber Ninja Assassin",
      img: "/projects/8.webp",
      gLink: "",
      lLink: "",
      
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href=""
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
      
      
      
      </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
