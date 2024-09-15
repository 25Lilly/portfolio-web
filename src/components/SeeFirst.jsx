import { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './SeeFirst.css';
import images from '../coverImageLoader';


function SeeFirst() {

  const [imageIndex, setImageIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ['Creator', 'Roboticist', 'Innovator', 'Explorer', 'Problem Solver', 'Artist', 'Developer', 'Programmer', 'Maker', 'Thinker', 'Collaborator', 'Leader', 'Learner', 'Builder'];

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }  

  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      setWordIndex(randomInt(0, words.length));
      setImageIndex(index => (index + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(backgroundInterval);
    }
  }, []);

  return (
    <div 
      className='first-container'
      style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 1) 75%), url(${images[imageIndex]}) center center/cover no-repeat`,
        transition: 'all 1s ease'
      }}
    >
      <h1>Lilly Chiavetta</h1>
      <p> Engineer, Designer, {words[wordIndex]} </p>
      <div className='first-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          onClick={() => window.scrollTo({top: document.getElementById('myProjects').offsetTop, behavior: 'smooth'})}
        >
          SEE PROJECTS
        </Button>
      </div>
    </div>
  );
}





export default SeeFirst;
