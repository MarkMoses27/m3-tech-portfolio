import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="TECHs Logo" style={{ height: "60px", width: "auto" }} />TECH
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/know" className="nav-links">Know Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact</Link>
          </li>
        </ul>
        <div className="hire-me-button">
          <Link to="/hire-me">
            <button className="btn-hire">Hire Me</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
