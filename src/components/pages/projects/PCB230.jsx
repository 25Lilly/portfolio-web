import React from 'react';
import ProjectOutline from './ProjectOutline';

function PCB230() {
    return (
      <>
        <ProjectOutline
            title = 'Duke D PCB'
            coverImage = {`${process.env.PUBLIC_URL}/images/projectImages/PCB230/PCBfrontback.png`}
            overviewDescription='This PCB was designed to be a fun introduction to soldering for students in the Introduction to Microelectronics course. 
            The PCB was designed to be a simple 2-layer board with a 555 timer, two LEDs, and an on/off button. 
            The board was designed in KiCAD and was mass manufactured for student use.'
            // embeddedDocument= {`${process.env.PUBLIC_URL}/documents/resume.pdf`}
        />
      </>
    );
}

export default PCB230;