import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? 'dark-theme' : ''}>
      <BrowserRouter>
        <nav className="app-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <button
            onClick={() => setIsDarkMode(prev => !prev)}
            aria-label="Toggle dark mode"
            style={{ marginLeft: 'auto', minWidth: '120px' }}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>Built with Vite + React | Router, Refs, Keys, Hooks demo</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;