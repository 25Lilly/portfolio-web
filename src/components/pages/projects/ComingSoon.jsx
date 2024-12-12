import React from 'react';
import '../../../App.css';
import './ComingSoon.css';
import Navbar from '../../Navbar';
import { Button } from '../../Button';

const video = `${process.env.PUBLIC_URL}/videos/video-1.mp4`;
// const video = `${process.env.PUBLIC_URL}/images/projectImages/checkersRobot/RobotPlayingSelf.mp4`

function ComingSoon() {
  return (
    <>
    <Navbar />
    <div className='coming-container'>
      <video src={video} autoPlay loop muted />
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
