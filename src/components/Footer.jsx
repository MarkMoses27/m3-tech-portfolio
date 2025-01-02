import React from 'react';
import './Footer.css';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <h3 className="footer-title">Mark Moses</h3>
            <p className="footer-description">
              Transforming ideas into reality through creative web development and design solutions.
            </p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li><a href="/web-development">Web Development</a></li>
              <li><a href="/mobile-apps">Mobile Apps</a></li>
              <li><a href="/ui-design">UI/UX Design</a></li>
              <li><a href="/resume">CV writing | Revamp</a></li>
              <li><a href="/graphic">Graphic Design</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <p>+254 715 137 922</p>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <p>markmoses817@gmail.com</p>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <p>00618 Kasarani, Nairobi City</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-section">
          <h4 className="footer-subtitle">Subscribe to Newsletter</h4>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <div className="copyright-text">
            <p>&copy; {currentYear} M3tech. All rights reserved.</p>
          </div>
          <div className="made-with">
            <p>Made with <FaHeart className="heart-icon" /> by Mark Moses</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;