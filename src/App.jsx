import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
// import Games from './components/pages/Games';
import Projects from './components/pages/Projects';
import Morphy from './components/pages/projects/Morphy';
import ComingSoon from './components/pages/projects/ComingSoon';
import ProjectPage from './components/pages/projects/ProjectPage';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Games" element={<ComingSoon />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Projects/Morphy" element={<Morphy />} />
      <Route path="/Projects/EKG" element={<ComingSoon />} />
      <Route path="/Projects/PPG" element={<ComingSoon />} />
      <Route path="/Projects/BPM" element={<ComingSoon />} />
      <Route path="/Projects/ProjectPage" element={<ProjectPage />} />
      <Route path="/Projects/ComingSoon" element={<ComingSoon />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </Router>
);

export default App;
