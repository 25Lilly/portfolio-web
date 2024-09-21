import Navbar from '../../Navbar';
import React from 'react';
import './GameBox.css';

function GameBox({ title, game}) {
    return (
      <>
          <Navbar />
          <div className='gameBox' style={ {display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px'}}>
              <h1>{title}</h1>
              <div 
                className='gameBox__container' 
                style={{ display: 'flex', 
                        flexDirection: 'column', 
                        marginTop: '10px', 
                        background: 'grey',
                        height: '80vh', 
                        width: '90%',
                        overflow: 'hidden',
                        borderRadius: '10px',
                        border: '2px solid black'}}>
                {game}
              </div>
          </div>
      </>
    );
  }
  
  export default GameBox;
  