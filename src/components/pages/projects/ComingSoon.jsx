import React from 'react';
import '../../../App.css';
import './ComingSoon.css';
import Navbar from '../../Navbar';
import { Button } from '../../Button';

function ComingSoon() {
  return (
    <>
    <Navbar />
    <div className='coming-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Coming Soon...</h1>
      <p>This page is still in development. Check out some of my other projects! </p>
      <div className='coming-btns'>
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          buttonLink='/projects'
        >
          View More Projects
        </Button>
      </div>
    </div>
    </>
  );
}

export default ComingSoon;
