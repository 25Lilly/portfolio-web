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
              src={`${process.env.PUBLIC_URL}/images/projectImages/morphyCover.png`}
              text='Automatic Shapeshifter'
              label = 'An autotransformable toy that changes shape at the push of a button'
              path='/Projects/Morphy'
            />
            <CardItem
              src= {`${process.env.PUBLIC_URL}/images/projectImages/BPM/BPMCover.jpeg`}
              text='Automatic Blood Pressure Cuff'
              label = 'Measuring blood pressure using korotkoff sounds and a pressure cuff'
              path='/Projects/BPM'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= {`${process.env.PUBLIC_URL}/images/projectImages/PatientWatch.png`}
              text='Patient Watch' 
              label = 'A Nurse&apos;s aid, keeping track of patient vitals and notifying nurses of patient status'
              path='/Projects/ComingSoon'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/projectImages/fluidWarmerCover.png`}
              text='IV Fluid Warmer'
              label = 'A low-cost device to warm IV fluids to body temperature to prevent hypothermia in surgical patients'
              path='/Projects/ComingSoon'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/projectImages/spotTheSpotCover.jpg`}
              text='Parking Spot Monitor'
              label = 'A device to remotely monitor parking spots and notify users of available spots'
              path='/Projects/ComingSoon'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/projectImages/ECG_design.png`}
              text='Portable EKG'
              label = 'Detecting electrical activity of the heart to visualize and measure heart rate'
              path='/Projects/EKG'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
