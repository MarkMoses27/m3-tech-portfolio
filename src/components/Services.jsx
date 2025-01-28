import React from "react";
import { FaLaptopCode, FaPalette, FaServer, FaBuilding, FaChartLine, FaBullhorn, FaSearch } from "react-icons/fa";

const Services = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Title */}
        <h1 style={styles.title}>Our Services</h1>
        <p style={styles.subtitle}>Providing world-class solutions for businesses and individuals.</p>

        {/* Services Grid */}
        <div style={styles.grid}>
          <div style={styles.card} className="service-card">
            <FaLaptopCode style={styles.icon} />
            <h3 style={styles.cardTitle}>Web Development</h3>
            <p style={styles.cardText}>
              Full-stack web development using React, Django, Python, JavaScript, and Angular to create modern, scalable web applications.
            </p>
          </div>

          <div style={styles.card} className="service-card">
            <FaPalette style={styles.icon} />
            <h3 style={styles.cardTitle}>Graphic Design</h3>
            <p style={styles.cardText}>
              Professional branding, logo design, UI/UX design, and marketing materials with Adobe Creative Cloud & Canva expertise.
            </p>
          </div>

          <div style={styles.card} className="service-card">
            <FaServer style={styles.icon} />
            <h3 style={styles.cardTitle}>IT Consulting</h3>
            <p style={styles.cardText}>
              Offering expert guidance in IT infrastructure, cybersecurity, system optimization, and cloud solutions.
            </p>
          </div>

          <div style={styles.card} className="service-card">
            <FaBuilding style={styles.icon} />
            <h3 style={styles.cardTitle}>Business Services</h3>
            <p style={styles.cardText}>
              Assisting with tax returns, company registrations, resume writing, and compliance consulting.
            </p>
          </div>

          <div style={styles.card} className="service-card">
            <FaSearch style={styles.icon} />
            <h3 style={styles.cardTitle}>SEO Optimization</h3>
            <p style={styles.cardText}>
              Boost your website’s ranking with advanced Search Engine Optimization (SEO) techniques to drive organic traffic and conversions.
            </p>
          </div>

          <div style={styles.card} className="service-card">
            <FaBullhorn style={styles.icon} />
            <h3 style={styles.cardTitle}>Social Media Management</h3>
            <p style={styles.cardText}>
              Grow your brand with strategic social media marketing, content creation, and engagement across platforms like Facebook, Instagram, and LinkedIn.
            </p>
          </div>

          <div style={styles.card} className="service-card">
            <FaChartLine style={styles.icon} />
            <h3 style={styles.cardTitle}>Digital Marketing</h3>
            <p style={styles.cardText}>
              Drive more leads and sales through targeted online advertising, PPC campaigns, and email marketing strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Internal Styles for Hover Effects & Glow Animation */}
      <style>
        {`
          @keyframes glow {
            0% { box-shadow: 0 0 5px #cb6ce6; }
            50% { box-shadow: 0 0 20px #cb6ce6; }
            100% { box-shadow: 0 0 5px #cb6ce6; }
          }

          .service-card:hover {
            transform: scale(1.05);
            animation: glow 1s infinite alternate;
          }
        `}
      </style>
    </section>
  );
};

// Internal CSS Styling
const styles = {
  section: {
    padding: "6rem 2rem",
    background: "linear-gradient(145deg, #030c20, #0f172a)",
    color: "#fff",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "#cb6ce6",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#b8b5b5",
    marginBottom: "3rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },
  card: {
    background: "rgba(255, 255, 255, 0.08)",
    padding: "2rem",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease-in-out",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#cb6ce6",
    marginBottom: "1rem",
  },
  cardText: {
    fontSize: "1rem",
    color: "#b8b5b5",
    lineHeight: "1.6",
  },
  icon: {
    fontSize: "3rem",
    color: "#cb6ce6",
    marginBottom: "1rem",
  },
};

export default Services;
