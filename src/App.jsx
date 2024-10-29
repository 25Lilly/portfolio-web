import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';

import Games from './components/pages/Games';
import GameBox from './components/pages/games/GameBox';
import OGSnake from './components/pages/games/OGSnake';
import NDSnake from './components/pages/games/NDSnake';

import Projects from './components/pages/Projects';
import ComingSoon from './components/pages/projects/ComingSoon';
import ProjectPage from './components/pages/projects/ProjectPage';
import PCB230 from './components/pages/projects/PCB230';
import BPM from './components/pages/projects/BPM';
// import DRC from './components/pages/projects/DRC';
// import Morphy from './components/pages/projects/Morphy';

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
      <Route path="/Games" element={<Games />} />
      <Route path="/Games/OGSnake" element={<GameBox title="Snake" game={<OGSnake />} />} />
      <Route path="/Games/NDSnake" element={<GameBox title="Never Die Snake" game={<NDSnake />} />} />

      <Route path="/Projects" element={<Projects />} />
      <Route path="/Projects/Morphy" element={<ComingSoon />} />
      <Route path="/Projects/EKG" element={<ComingSoon />} />
      <Route path="/Projects/PPG" element={<ComingSoon />} />
      <Route path="/Projects/BPM" element={<BPM />} />
      <Route path="/Projects/PCB230" element={<PCB230 />} />
      {/* <Route path="/Projects/DRC" element={<DRC />} /> */}
      <Route path="/Projects/ProjectPage" element={<ProjectPage />} />
      <Route path="/Projects/ComingSoon" element={<ComingSoon />} />

      <Route path="/About" element={<About />} />
    </Routes>
  </Router>
);

export default App;
