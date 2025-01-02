import './Hero.css';
import { BsWhatsapp, BsPhone } from 'react-icons/bs';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side - Image */}
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src="../../../src/assets/hero-image.svg"
              alt="Portrait of Mark Moses - Creative Developer"
              className="hero-image"
            />
            <div className="image-shape"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="hero-content">
          <span className="welcome-text">Welcome to my Portfolio</span>
          <h1 className="hero-title">
            Hi! I&apos;m <span className="highlight">Mark Moses</span>
            <br />
            Creative Developer
          </h1>
          <p className="hero-description">
            A passionate full-stack developer with over 5 years of experience in creating
            beautiful and functional web applications. Specialized in React, Node.js,
            and modern web technologies.
          </p>

          {/* Primary Buttons */}
          <div className="primary-buttons">
            <button className="btn btn-primary">Hire Me</button>
            <button className="btn btn-secondary">Know More</button>
          </div>

          {/* Contact Buttons */}
          <div className="contact-buttons">
            <a 
              href="https://wa.me/254715137922" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn whatsapp-btn"
            >
              <BsWhatsapp size={20} />
              <span>WhatsApp Me</span>
            </a>
            <a href="tel:+254715137922" className="contact-btn call-btn">
              <BsPhone size={20} />
              <span>Call Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
