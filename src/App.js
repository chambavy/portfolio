import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import './App.css'; // Import the CSS file

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
        </ul>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
