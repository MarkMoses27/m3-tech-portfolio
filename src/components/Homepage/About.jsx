import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faDatabase, faCogs, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <FontAwesomeIcon icon={faLaptopCode} className="skill-icon" style={{ color: '#61DBFB' }} />, 
      items: [
        { name: "React.js", level: 90, color: '#61DBFB' },
        { name: "JavaScript", level: 85, color: '#F7DF1E' },
        { name: "HTML/CSS", level: 95, color: '#E34C26' },
      ],
    },
    {
      category: "Backend Development",
      icon: <FontAwesomeIcon icon={faDatabase} className="skill-icon" style={{ color: '#4CAF50' }} />, 
      items: [
        { name: "Node.js", level: 80, color: '#68A063' },
        { name: "Python", level: 75, color: '#306998' },
        { name: "MongoDB", level: 85, color: '#4CAF50' },
      ],
    },
    {
      category: "Professional Services",
      icon: <FontAwesomeIcon icon={faCogs} className="skill-icon" style={{ color: '#FF5733' }} />, 
      items: [
        { name: "LinkedIn Optimization", level: 90, color: '#0077B5' },
        { name: "Graphic Design", level: 85, color: '#FF5733' },
        { name: "Tax Consultation", level: 75, color: '#FF6F61' },
        { name: "IT Consultation", level: 85, color: '#007ACC' },
      ],
    },
    {
      category: "Educational Services",
      icon: <FontAwesomeIcon icon={faLaptopCode} className="skill-icon" style={{ color: '#FF61F6' }} />, 
      items: [
        { name: "Computer Tutoring", level: 90, color: '#4CAF50' },
        { name: "Cover Letter & Resume Revamp", level: 95, color: '#A259FF' },
      ],
    },
    {
      category: "Other Skills",
      icon: <FontAwesomeIcon icon={faGitAlt} className="skill-icon" style={{ color: '#F05033' }} />, 
      items: [
        { name: "Git/GitHub", level: 90, color: '#F05033' },
        { name: "DevOps", level: 75, color: '#007ACC' },
        { name: "Agile", level: 85, color: '#FF6F61' },
      ],
    },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <span className="section-subtitle">My Introduction</span>
        </div>

        <div className="about-content">
          {/* Left Side - About Text */}
          <div className="about-text">
            <h3 className="about-title">Professional Summary</h3>
            <p className="about-description">
              With over 5 years of experience in web development, professional services, and education, I specialize in creating impactful solutions tailored to individual and business needs.
            </p>

            <div className="experience-boxes">
              <div className="exp-box">
                <h4>05+</h4>
                <p>Years of<br />Experience</p>
              </div>
              <div className="exp-box">
                <h4>50+</h4>
                <p>Projects<br />Completed</p>
              </div>
              <div className="exp-box">
                <h4>20+</h4>
                <p>Happy<br />Clients</p>
              </div>
            </div>

            <button className="download-cv">
              <FontAwesomeIcon icon={faDownload} className="download-icon" />
              Download CV
            </button>
          </div>

          {/* Right Side - Skills */}
          <div className="skills-container">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <div className="skill-header">
                  {skillGroup.icon}
                  <h3>{skillGroup.category}</h3>
                </div>
                <div className="skill-list">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-info">
                        <span
                          className="skill-name"
                          style={{ color: skill.color }}
                        >
                          {skill.name}
                        </span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
