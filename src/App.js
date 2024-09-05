import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Researches from './Pages/Research';
import ContactMe from './Pages/Contact'
import './App.css'; // Import the CSS file
import Footer from './Components/Footer'; // Adjust the path as necessary

function App() {

  const [theme, setTheme] = useState('light'); // Default theme

  useEffect(() => {
    // Apply the theme class to the body element
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/researches">Researches</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/researches" element={<Researches />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;
