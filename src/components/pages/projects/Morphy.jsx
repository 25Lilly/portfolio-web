import React from 'react';
import ProjectOutline from './ProjectOutline';

const checkersVideo = `${process.env.PUBLIC_URL}/images/projectImages/morphyImages/morphyCollection.png`;
const description_text = 'A shapeshifting toy built out of 3D printed blocks that can be controlled via a remote. The toy, named Morphy, can transform into different shapes such as a snake, bird, and giraffe. It is designed to be fun and engaging for all ages, allowing users to express their creativity by twisting the blocks manually or using the remote to send it to a pre-defined shape.';
const system_overview_text = ['Morphy consists of 16 bloks that can each rotate 270 degrees about eachother. Along with manual twisting, Morphy is attached to a remote that sends commands to the blocks using bluetooth. These commands then reach servos inserted inside the toy that will rotate the blocks to their required angles for its commanded shape.',
  `${process.env.PUBLIC_URL}/images/projectImages/morphyImages/morphyHWFlow.png`,
  'The devices within the system are the servos within each block that provide the rotation, adafruit feather boards inside both the remote and toy that handle the major logic and bluetooth communication, ATTinys inside each block to allow for I2C control across the whole system, rechargeable batteries that power each system, and a boost converter that elevates the voltage for the servos. The main body of the toy is a distributed brain system, with the main brain (the bluetooth SOC on the adafruit feather board) sending I2C commands to the ATTinys in each block, which then send pwm commands to the servos to rotate the blocks.',
  `${process.env.PUBLIC_URL}/images/projectImages/morphyImages/morphyUncovered.jpeg`,
  'The software for the toy was all written in C++ using the Arduino IDE to upload to both the adafruit feather boards and the ATTinys. The remote uses a simple button interface to receive user commands and then sends them over bluetooth to the toy; the toy then interprets these commands and sends the appropriate I2C commands to each block. Each block then rotates its servo to the desired angles. The remote and toy communicate using the Adafruit Bluefruit library, which allows for easy pairing and communication between the two devices.',
  `${process.env.PUBLIC_URL}/images/projectImages/morphyImages/morphySWFlow.png`,
  'The remote also allows for new shapes to be uploaded to it via a serial connection to a computer. The user can upload a new shape by connecting their computer to the remote with a microUSB cable and then sending a serial string to the remote with the angles for each block in the shape, the remote will then store this in memory until another upload overwrites it. Once the string of angles is uploaded, the user can then press the uploaded preset button to transfer the angles over to the toy via bluetooth.',
  `${process.env.PUBLIC_URL}/images/projectImages/morphyImages/morphyUploadOverview.png`,
];
const demo_text = ['This demo showcases Morphy rotating to the giraffe shape. After the remote button was pressed, the servos then began rotating one by one in order to create the new 3D shape from the origional morphy line.',
  `${process.env.PUBLIC_URL}/images/projectImages/morphyImages/RotateToGiraffe.mp4`
];
const team_text = [`${process.env.PUBLIC_URL}/images/projectImages/morphyImages/morphyTeam.jpeg`, 
  'This project was created as a part of Duke\'s intedisciplinary product design class. Over a course of a semester, I worked in a team of 4 to mechanically and electrically design Morphy into a standalone toy that culminated in a presentation at the Duke Pratt design fair. My team members worked on the design of the blocks and the remote in Solidworks, as well as figuring out the proposed shapes Morphy would turn into. I worked on the design and implementation of the electrical and software systems, as well as the communication protocol between the remote and the toy.']

function Morphy() {
    return (
      <>
        <ProjectOutline
            title = 'Shapeshifting Toy'
            coverImage = {checkersVideo}
            overviewDescription={description_text}
            sections={[
              'System Overview',
              'Demo',
              'The Team'
            ]}
            section_content={[
              system_overview_text,
              demo_text,
              team_text,
              ''
            ]}
        />
      </>
    );
}

export default Morphy;
