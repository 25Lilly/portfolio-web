import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import CardItem from '../CardItem';

function Games() {
  return (
    <>
    <Navbar />
    <div className='games'>
    <div className='cards'>
      <h1>Games!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/game_images/OGSnakeCover.png`}
              text='Snake'
              label = 'Normal snake with wrap around'
              path='/Games/OGSnake'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/game_images/CheckersCover.png`}
              text='Checkers'
              label = 'Checkers game setup for 2 players'
              path='/Games/Checkers'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/game_images/NDSnakeCover.png`}
              text='Never Die Snake'
              label = 'A game for everyone who is bad at snake'
              path='/Games/NDSnake'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Games;
