import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import AboutMeElements from '../AboutMeElements';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Navbar />
      <div class="about">    	    
    		<h1 class="title">
          About Me
        </h1>
        <div class="profile-container">
          <img src= {`${process.env.PUBLIC_URL}/images/profile.png`} alt='Profile' class="profile-image" />
          <div class="profile-text">
            <p>Hi There! </p>
            <p>I'm Lilly Chiavetta, an engineer currently studying Biomedical Engineering and Electrical & Computer Engineering at Duke University.
              I am passionate about crafting elegant solutions to complex problems and am always looking for new opportunities to learn and grow.
            </p>
            <p>
              My interests have led me to explore a variety of different technologies and fields as I grow my skillset as an engineer. 
              My journey includes a diverse <Link to="/Projects">portfolio of projects</Link> that continually enhance my skills and knowledge. 
              From developing a <Link to="/Projects/Morphy">shapeshifting toy</Link> to creating <Link to="/Projects">this very website</Link>, 
              each project offers unique learning opportunities and excitement. I thrive on the challenge of mastering new technologies and 
              the satisfaction of seeing my creations come to life.
            </p>
          </div>
        </div>
      </div>
      <AboutMeElements />
    </>
  );
}

export default About;

