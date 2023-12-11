import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SeeFirst.css';

function SeeFirst() {
  return (
    <div className='first-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='first-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SEE PROJECTS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default SeeFirst;
