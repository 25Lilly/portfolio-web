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
          {/* no title rn :( */}
        </h1>
        <div class="profile-container">
          <img src= {`${process.env.PUBLIC_URL}/images/profile.png`} alt='Profile' class="profile-image" />
          <div class="profile-text">
            <p>Hello!</p>
            <p>My name is Lilly Chiavetta, an engineer with a passion for building elegant solutions to complex problems.</p>
            <p>
              I am currently majoring in Biomedical Engineering and Electrical & Computer Engineering at Duke University. 
              My journey is marked by a diverse <Link to="/Projects">portfolio of projects</Link> that continually 
              expand my skills and knowledge. From developing a <Link to="/Projects/Morphy">shapeshifting toy</Link> to 
              creating <Link to="/Projects">this very website</Link>, each endeavor brings its own set of learning experiences and excitement.
              I enjoy the challenge of learning new technologies and the satisfaction of seeing my work come to life.  
            </p>
          </div>
        </div>
      </div>
      {/* <AboutMeElements /> */}
    </>
  );
}

export default About;

