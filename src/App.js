import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Games from './components/pages/Games';
import Projects from './components/pages/Projects';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Games' element={<Games/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
