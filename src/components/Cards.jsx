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
              src={`${process.env.PUBLIC_URL}/images/card_images/DRCCover.jpg`}
              text='Duke Robotics Autonomous Underwater Vehicle'
              label = 'A robot that navigates underwater and performs tasks autonomously'
              path='/Projects/DRC'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/card_images/flipperCover.jpeg`}
              text='Flipping Robot'
              label = 'A dancing robot that can walk and do a flip'
              path='/Projects/ComingSoon'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/card_images/morphyCover.png`}
              text='Automatic Shapeshifter'
              label = 'An autotransformable toy that changes shape at the push of a button'
              path='/Projects/Morphy'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/card_images/dormDisplayCover.jpeg`}
              text='Smart Dorm Display'
              label = 'A custom LED display that connects to the internet'
              path='/Projects/ComingSoon'
            />
            <CardItem
              src= {`${process.env.PUBLIC_URL}/images/card_images/BPMCover.jpeg`}
              text='Automatic Blood Pressure Cuff'
              label = 'Measuring blood pressure using korotkoff sounds and a pressure cuff'
              path='/Projects/BPM'
            />
            <CardItem
              src= {`${process.env.PUBLIC_URL}/images/card_images/DukePCBCover.jpeg`}
              text='Duke D PCB'
              label = 'Custom PCB to teach incomming Duke ECE students how to solder'
              path='/Projects/ComingSoon'
            />
            <CardItem
              src= {`${process.env.PUBLIC_URL}/images/card_images/paitentWatchCover.png`}
              text='Patient Watch' 
              label = 'A Nurse&apos;s aid, keeping track of patient vitals and notifying nurses of patient status'
              path='/Projects/ComingSoon'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/card_images/fluidWarmerCover.png`}
              text='IV Fluid Warmer'
              label = 'A low-cost device to warm IV fluids to body temperature to prevent hypothermia in surgical patients'
              path='/Projects/ComingSoon'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/card_images/spotTheSpotCover.jpg`}
              text='Parking Spot Monitor'
              label = 'A device to remotely monitor parking spots and notify users of available spots'
              path='/Projects/ComingSoon'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/card_images/ECGCover.png`}
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
