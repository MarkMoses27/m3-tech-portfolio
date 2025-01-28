import { useState } from 'react';
import './Hero.css';
import { BsWhatsapp, BsPhone } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactDropdown = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side - Image */}
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src="../../../src/assets/hero-image.svg"
              alt="Mark Moses - Creative Developer"
              className="hero-image"
              loading="lazy"
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
            A dedicated full-stack developer and graphic designer with 5+ years of experience. 
            I specialize in Python, JavaScript, React, Node.js, modern web technologies, 
            Adobe Creative Cloud, and Canva.
          </p>

          {/* Primary Buttons */}
          <div className="primary-buttons">
            <a href="#" className="btn btn-primary">Hire Me</a>
          </div>

          {/* Contact Dropdown */}
          <div className="contact-dropdown">
            <button
              className="btn contact-toggle"
              onClick={toggleContactDropdown}
              aria-expanded={isContactOpen}
            >
              Contact Me <FiChevronDown size={16} />
            </button>
            {isContactOpen && (
              <div className="contact-options">
                <a href="https://wa.me/254715137922" target="_blank" className="contact-btn whatsapp-btn">
                  <BsWhatsapp size={20} />
                  <span>WhatsApp</span>
                </a>
                <a href="tel:+254715137922" className="contact-btn call-btn">
                  <BsPhone size={20} />
                  <span>Call</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
