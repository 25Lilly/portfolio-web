import React from 'react';
import '../../../App.css';
import Navbar from '../../Navbar';
import './Morphy.css';

function Morphy() {
  return (
    <>
      <Navbar />
      <div className='project__container'>
        <div className= 'project__line__image'>
          <div className='left__line'>
            <img src={`${process.env.PUBLIC_URL}/images/projectImages/morphyLine.png`} alt = 'Line'/>
          </div>
        </div>
        <div className='title__text'>
          <h1> Morphy </h1>
          <p> The Shapeshifting Toy </p>
        </div>
        <div className='title__image'>
          <img src={`${process.env.PUBLIC_URL}/images/projectImages/morphySnakeAndBird.png`} alt = 'Morphy'/>
        </div>
        <div className= 'project__subheading'>
        <h3> For endless and engaging fun, Morphy is a toy for all ages to express their creativity!  
                This 16-block toy allows for endless possibilities; offering both manual twisting and
                using the remote to send it to a pre-defined shape. 
        </h3>
        </div>

        <div className='project__description'>
          <div className='headding__text'>
            <h1>Overview </h1>
          </div>
          <div className='instructions'>
            <div className='remote__text'>
              <p> Press a button on the remote to watch the toy change shape!</p>
            </div>
            <div className='instructions__images'>
              <div className='instructions__image__left'>
              <h2 class='line__text'> Line </h2>
                <div className='instructions__image__left__top'>
                  <img src={`${process.env.PUBLIC_URL}/images/projectImages/morphyLine.png`} alt = 'Instructions' class='rotate30'/>
                </div>
                <h2> Square </h2>
                <img src={`${process.env.PUBLIC_URL}/images/projectImages/morphySquare.png`} alt = 'Instructions'/>
              </div>
              <div className='remote__image'>
                <img src={`${process.env.PUBLIC_URL}/images/projectImages/morphyArrows.png`} alt = 'Instructions'/>
              </div>
              <div className='instructions__image__right'>
                <img src={`${process.env.PUBLIC_URL}/images/projectImages/morphySnake.png`} alt = 'Instructions'/>
                <h2> Cobra </h2>
                <img src={`${process.env.PUBLIC_URL}/images/projectImages/morphyBird.png`} alt = 'Instructions'/>
                <h2> Bird </h2>
                <img src={`${process.env.PUBLIC_URL}/images/projectImages/morphyGiraffe.png`} alt = 'Instructions' class='rotate30'/>
                <h2> Giraffe </h2>
              </div>
            </div>
            {/* <div className= 'division__line'>
              <img src='/images/projectImages/morphyLine.png' alt = 'Line'/>
            </div> */}

            <div className='upload'>
              <div className='upload__text'>
                <p> Upload new shapes each month!</p>
              </div>
              <div className='upload__image'>
                <img src={`${process.env.PUBLIC_URL}/images/projectImages/morphyUploadOverview.png`} alt = 'Upload'/>
              </div>
            </div>
          </div>


          <div className='tech__details'> 
            <div className='headding__text'>
              <h1> Technical Details </h1>
            </div>

            {/* <div className='section__text'>
              <h2> Morphy's construction can be broken into 3 parts </h2>
              <ul>
                <li className= "section__block"> 
                  <img
                    className='section__img'
                    alt='Mech'
                    src='/images/projectImages/morphyMech.png'
                  />
                  <p>Mechanical Hardware</p>
                </li>
                <li> Electrical Hardware </li>
                <li> Software </li>
                <figure className='section__image'>
                  <img src='/images/projectImages/morphyOverview.png' alt = 'Overview'/>
                </figure>
              </ul>
            </div> */}

            <div className = 'hardware__details'>
              <div className='subheading__text'>
                <h2> Hardware </h2>
              </div>
              <div className='flow__diagram'>
                <img src='/images/projectImages/morphyHWFlow.png' alt = 'HW'/>
              </div>
              <div className='hardware__text'>
                <h3></h3>
              </div>
            </div>

            <div className = 'software__details'>
              <div className='subheading__text'>
                <h2> Software </h2>
              </div>
              <div className='flow__diagram'>
                <img src='/images/projectImages/morphySWFlow.png' alt = 'SW'/>
              </div>
              <div className='software__text'>
                <h3></h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Morphy;
