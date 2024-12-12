import React from 'react';
import ProjectOutline from './ProjectOutline';

const checkersVideo = `${process.env.PUBLIC_URL}/images/projectImages/checkersRobot/RobotPlayingSelf.mp4`;
const description_text = 'An autonomous robot capable of playing checkers against itself, or a human opponent. Utilizing computer vision to log and update board state, the robot will move checkers across the board to jump the other player\'s pieces and crown kings. In the spirit of the Mechanical Turk, the robot is able to appear lifelike using animatronics and a voice clone with smack talk.';
const system_overview_text = ['The system is broken down into 5 main components: the computer vision system, the robot arm, the animatronics, the voice clone, and the game logic. The computer vision system is responsible for detecting the board state and updating the game state. The robot arm is responsible for moving the checkers pieces. The animatronics are responsible for giving the robot a lifelike appearance and giving the robot an aspect of \'human\' interaction. The voice clone is responsible for giving the robot a voice for smack talking its opponents. The game logic is responsible for determining the best move for the robot to make given the current board state.',
  `${process.env.PUBLIC_URL}/images/projectImages/checkersRobot/robotElements.jpg`,
  'The devices within the system are the robot arm\'s onboard Raspberry Pi, the animatronic\'s Arduino Uno, and a laptop for computer vision, audio processing, and game logic. The laptop sends game commands to the robot arm using TCP/IP protocol. The robot arm is controlled by a Python script that sends PWM signals to the arm\'s servos to move the end effector to the desired location on the board. The animatronics are controlled by an Arduino Uno that receives commands from the laptop over USB. The computer vision system is run on the laptop and uses OpenCV to detect the board state. The voice clone is also run on the laptop and uses a pre-trained model to generate speech. The game logic is run on the laptop and uses one of four different algorithms to determine the best move for the robot to make.',
  `${process.env.PUBLIC_URL}/images/projectImages/checkersRobot/deviceDiagram.png`,
];

function Checkers() {
    return (
      <>
        <ProjectOutline
            title = 'Autonomous Checkers Robot'
            coverImage = {checkersVideo}
            overviewDescription={description_text}
            sections={[
              'System Overview',
              'Research Paper',
              'embeddedDocument'
            ]}
            section_content={[
              system_overview_text,
              '',
              ''
            ]}
            embeddedDocument= {`${process.env.PUBLIC_URL}/documents/CheckersResearchPaper.pdf`}
        />
      </>
    );
}

export default Checkers;