import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Homepage/HomePage";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // Adjust path based on folder structure
import About from "./components/AboutMe";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
