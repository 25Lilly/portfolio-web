import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SeeFirst.css';
import images from '../coverImageLoader';

const words = ['Innovator', 'Explorer', 'Problem Solver', 'Artist', 'Developer', 'Programmer', 'Maker', 'Thinker', 'Collaborator', 'Leader', 'Learner', 'Creator', 'Builder'];
let word = words[0];

function SeeFirst() {
  //continuously add pop up images to the first container
  let imageIndex = 0;
  let wordIndex = 0;
  setInterval(() => {
    //if the first container is not visible, don't change the background
    if (document.querySelector('.first-container') === null) {
      return;
    }
    let image = images[imageIndex];
    document.querySelector('.first-container').style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 1) 75%), url(${image}) center center/cover no-repeat`;
    
    let word = words[wordIndex];
    document.querySelector('.first-container p').innerHTML = `Engineer, Designer, ${word}`;
    
    wordIndex = (wordIndex + 1) % words.length;
    imageIndex = (imageIndex + 1) % images.length;
  }, 6000);

  return (
    <div className='first-container'>
      <h1>Lilly Chiavetta</h1>
      <p> Engineer, Designer, Creator </p>
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
