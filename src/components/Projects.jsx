import React from "react";

const Projects = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>Projects</h1>
        <p style={styles.subtitle}>Exciting projects are on the way!</p>
        <div style={styles.box}>
          <h2 style={styles.comingSoon} className="animate-text">
            Coming Soon
          </h2>
        </div>
      </div>
      
      {/* Internal Styles for Animations */}
      <style>
        {`
          @keyframes moveText {
            0% { transform: translateX(-100%); opacity: 0.5; }
            50% { transform: translateX(50%); opacity: 1; }
            100% { transform: translateX(100%); opacity: 0.5; }
          }

          @keyframes glow {
            0% { text-shadow: 0 0 5px #cb6ce6, 0 0 10px #cb6ce6, 0 0 15px #cb6ce6; }
            50% { text-shadow: 0 0 20px #cb6ce6, 0 0 30px #cb6ce6, 0 0 40px #cb6ce6; }
            100% { text-shadow: 0 0 5px #cb6ce6, 0 0 10px #cb6ce6, 0 0 15px #cb6ce6; }
          }

          .animate-text {
            display: inline-block;
            animation: moveText 5s linear infinite alternate, glow 2s infinite alternate;
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
    overflow: "hidden",
  },
  container: {
    maxWidth: "900px",
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
    marginBottom: "2rem",
  },
  box: {
    background: "rgba(255, 255, 255, 0.08)",
    padding: "3rem",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease-in-out",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  comingSoon: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#cb6ce6",
  },
};

export default Projects;
