import React from 'react';
import ProjectOutline from './ProjectOutline';

const soldered_pcb_text = ['Every student in the class was given a PCB to solder and the required components. Three students\' PCBs are shown below.',
  `${process.env.PUBLIC_URL}/images/projectImages/PCB230/multipleSolderedPCBs.jpg`,
];

function PCB230() {
    return (
      <>
        <ProjectOutline
            title = 'Duke D PCB'
            coverImage = {`${process.env.PUBLIC_URL}/images/projectImages/PCB230/PCBfrontback.png`}
            overviewDescription='This PCB was designed to be a fun introduction to soldering for students in the Introduction to Microelectronics course. 
            It is a 2-layer board with a 555 timer, two LEDs, and an on/off button. 
            The board was designed in KiCAD and was mass manufactured for student use.'
            sections={['Soldered PCBs']}
            section_content={[soldered_pcb_text]}
        />
      </>
    );
}

export default PCB230;