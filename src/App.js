import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
// import Games from './components/pages/Games';
import Projects from './components/pages/Projects';
import Morphy from './components/pages/projects/Morphy';
import ComingSoon from './components/pages/projects/ComingSoon';
import ProjectPage from './components/pages/projects/ProjectPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Games' element={<ComingSoon/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Projects/Morphy' element={<Morphy/>} />
        <Route path='/Projects/EKG' element={<ComingSoon/>} />
        <Route path='/Projects/PPG' element={<ComingSoon/>} />
        <Route path='/Projects/BPM' element={<ProjectPage/>} />
        <Route path='/Projects/ComingSoon' element={<ComingSoon/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
