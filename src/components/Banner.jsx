/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/projects/44.jpg" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Laminar Pretty</h6>
            <h3>DYNAMIC DESIGNS STUDIO</h3>
            <p>
            At Dynamic Designs Studio, we specialize in creating innovative and visually captivating graphics that tell your unique story. From anime character designs to 3D animated intros, our focus is on delivering high-quality artwork tailored to your needs. With a passion for detail and creativity, we bring every concept to life, whether it's for gaming, live streaming, or web development. Let us help you elevate your brand and projects with designs that leave a lasting impression.</p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
