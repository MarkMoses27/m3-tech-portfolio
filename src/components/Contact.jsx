// Contact.jsx
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Contact Me</h2>
          <span className="section-subtitle">Get in Touch</span>
        </div>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h3 className="info-title">Let&apos;s Connect</h3>
            <p className="info-description">
              Feel free to reach out to me through any of the methods below. I’m always happy to connect and discuss potential opportunities.
            </p>

            <ul className="info-list">
              <li className="info-item">
                <FontAwesomeIcon icon={faPhone} className="info-icon" />
                <span>+254 715 137922</span>
              </li>
              <li className="info-item">
                <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                <span>mark.moses@example.com</span>
              </li>
              <li className="info-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <h3 className="form-title">Send a Message</h3>
            <form action="#" method="POST" className="form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
