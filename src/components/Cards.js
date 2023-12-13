import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Projects:<br></br> Transforming Ideas into Thoughtfully Engineered Sotuions</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/projectImages/morphyCover.png'
              text='Automatic Shapeshifter'
              label = 'An autotransformable toy that changes shape at the push of a button'
              path='/Projects/Morphy'
            />
            <CardItem
              src='/images/projectImages/ECG_design.png'
              text='Portable EKG'
              label = 'Detecting electrical activity of the heart to visualize and measure heart rate'
              path='/Projects/EKG'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/projectImages/PatientWatch.png'
              text='Patient Watch' 
              label = 'A Nurse&apos;s aid, keeping track of patient vitals and notifying nurses of patient status'
              path='/Projects/PPG'
            />
            <CardItem
              src='/images/projectImages/fluidWarmerCover.png'
              text='IV Fluid Warmer'
              label = 'A low-cost device to warm IV fluids to body temperature to prevent hypothermia in patients'
              path='/Projects/BPM'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/projectImages/BPMCover.jpeg'
              text='Blood Pressure Monitor'
              label = 'A robotic arm that can be controlled by a user&apos;s hand movements'
              path='/Projects/ComingSoon'
            />
            <CardItem
              src='/images/projectImages/spotTheSpotCover.jpg'
              text='Remotely Watching Parking Spots'
              label = 'A robotic arm that can be controlled by a user&apos;s hand movements'
              path='/Projects/ComingSoon'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
