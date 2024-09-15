import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';

function About() {
  return (
    <>
    <Navbar />
    <h1 className='about'> Hello! I'm Lilly Chiavetta. </h1>
    <image src='public/images/profile.jpg' alt='My face' />
    <h2 className='about'> Let's Go Duke!</h2>
    </>
  );
}

export default About;
