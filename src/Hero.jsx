import React from 'react'
import heroImg from "./assets/hero.svg"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>React Projects</h1>
          <p>
            I have developed a diverse React project portfolio showcasing my
            skills and creativity. From responsive web applications to
            interactive UI components, my projects demonstrate my ability to
            build robust and visually appealing user interfaces. With a focus on
            clean code and efficient performance, my portfolio reflects my
            dedication to delivering high-quality React projects.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero