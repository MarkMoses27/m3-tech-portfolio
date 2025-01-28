import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="M3 Tech Logo" className="logo" />
          <span className="logo-text">M3 TECH</span>
        </Link>

        {/* Menu Button (Only Visible on Mobile) */}
        <div className="menu-container" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">Know Me</Link>
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

        {/* Hire Me Button */}
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
