import React from 'react'
import heroImg from "./assets/hero.svg"
const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda natus ea distinctio vitae exercitationem unde voluptatibus, magnam, aliquam odit quibusdam adipisci porro in vero corporis, sapiente maxime nemo. Consequuntur, unde?</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="" className='img'/>
            </div>
        </div>

    </section>
  )
}

export default Hero