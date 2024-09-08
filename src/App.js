import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Researches from './Pages/Research';
import ContactMe from './Pages/Contact';
import ProjectExtraPage from './Components/ProjectExtraPage';
import './App.css'; // Import the CSS file
import Footer from './Components/Footer'; // Adjust the path as necessary
import { FaBars, FaMoon, FaSun } from 'react-icons/fa'; // Import Font Awesome icons

function App() {
  const [theme, setTheme] = useState('light'); // Default theme
  const [isNavOpen, setIsNavOpen] = useState(false); // Toggle for dropdown

  useEffect(() => {
    // Apply the theme class to the body element
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <nav>
        <button className="menu-icon" onClick={toggleNav}>
          <FaBars />
        </button>
        <ul className={isNavOpen ? 'open' : ''}>
          <li><Link to="/portfolio">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/researches">Researches</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="theme-switch-icon" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </nav>

      <main>
        <Routes>
          <Route path="/portfolio" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectExtraPage />} />
          <Route path="/researches" element={<Researches />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
