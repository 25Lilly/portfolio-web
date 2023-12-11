import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SeeFirst.css';

function SeeFirst() {
  return (
    <div className='first-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Hi! I'm Lilly Chiavetta</h1>
      <p>Engineer, Coder, Artist</p>
      <div className='first-btns'>
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
