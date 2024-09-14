import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SeeFirst.css';

function SeeFirst() {
  return (
    <div className='first-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Lilly Chiavetta</h1>
      <p>engineer</p>
      <div className='first-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
        >
          SEE PROJECTS
        </Button>
      </div>
    </div>
  );
}

export default SeeFirst;
