import { BrowserRouter as Router, Routes } from "react-router-dom"



import Navbar from "./components/Navbar/Navbar"
import HomePage from './components/Homepage/HomePage';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="HomePage">
        <HomePage/>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
