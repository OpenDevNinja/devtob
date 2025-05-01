// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ExperienceTimeline from './pages/ExperienceTimeline';

// Ajoutez ce composant pour gérer le scroll vers les ancres
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Ajoutez ce composant ici */}
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              isScrolled={isScrolled} 
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/parcours" element={<ExperienceTimeline />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;