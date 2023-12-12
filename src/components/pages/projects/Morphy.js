import React from 'react';
import '../../../App.css';
import Navbar from '../../Navbar';
import './Morphy.css';

function Morphy() {
  return (
    <>
    <Navbar />
    <div className='projet'>
      <h1> Morphy </h1>
      {/* <img 
        className='project__title__image'
        src='/images/projectImages/morphyUncovered.jpeg' alt='Morphy Cover' 
      /> */}
      <p> How it works </p>
    </div>
    </>
  );
}

export default Morphy;
