import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
