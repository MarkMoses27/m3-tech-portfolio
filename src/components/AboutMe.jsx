import { FaCode, FaPaintBrush, FaTools, FaBriefcase, FaCheckCircle } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Title */}
        <h1 style={styles.title}>About Me</h1>
        <p style={styles.intro}>
          Hi, I’Mark, a full-stack developer, graphic designer, and IT consultant based in Nairobi, Kenya. Over the
          last 7 years, I’ve combined my passion for technology and creativity to deliver innovative solutions to
          businesses and individuals.
        </p>

        {/* What I Do Section */}
        <h2 style={styles.subsectionTitle}>What I Do</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <FaCode style={styles.icon} />
            <h3 style={styles.cardTitle}>Web Development</h3>
            <p style={styles.cardText}>
              I specialize in full-stack solutions, using React, Django, Python, JavaScript, and Angular to create
              modern, scalable websites and applications.
            </p>
          </div>

          <div style={styles.card}>
            <FaPaintBrush style={styles.icon} />
            <h3 style={styles.cardTitle}>Graphic Design</h3>
            <p style={styles.cardText}>
              Certified in Adobe Creative Cloud and Canva, I bring ideas to life through stunning visuals, logos, and
              branding materials.
            </p>
          </div>

          <div style={styles.card}>
            <FaTools style={styles.icon} />
            <h3 style={styles.cardTitle}>IT Consulting</h3>
            <p style={styles.cardText}>
              From optimizing systems to ensuring cybersecurity, I help businesses tackle complex IT challenges with
              ease.
            </p>
          </div>

          <div style={styles.card}>
            <FaBriefcase style={styles.icon} />
            <h3 style={styles.cardTitle}>Professional Services</h3>
            <p style={styles.cardText}>
              I offer expert help with tax returns, company registrations, resume writing, and more.
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <h2 style={styles.subsectionTitle}>Certifications</h2>
        <div style={styles.certifications}>
          <p><FaCheckCircle style={styles.certIcon} /> Certified Adobe Designer</p>
          <p><FaCheckCircle style={styles.certIcon} /> Certified Canva Designer</p>
        </div>

        {/* Call to Action */}
        <button style={styles.button}>Hire Me</button>
      </div>
    </section>
  );
};

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
    marginBottom: "2rem",
  },
  intro: {
    fontSize: "1.2rem",
    color: "#b8b5b5",
    lineHeight: "1.8",
    marginBottom: "3rem",
  },
  subsectionTitle: {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#cb6ce6",
    margin: "3rem 0 1rem",
    borderBottom: "2px solid #cb6ce6",
    display: "inline-block",
    paddingBottom: "5px",
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
  certifications: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "1rem",
    fontSize: "1.2rem",
    color: "#b8b5b5",
  },
  certIcon: {
    color: "#4CAF50",
    marginRight: "10px",
  },
  button: {
    marginTop: "2rem",
    padding: "10px 20px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#fff",
    background: "#cb6ce6",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  },
  buttonHover: {
    background: "#a44ed4",
    transform: "scale(1.05)",
  },
};

export default AboutMe;
