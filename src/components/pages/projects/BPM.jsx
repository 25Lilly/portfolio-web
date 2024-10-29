import React from 'react';
import ProjectOutline from './ProjectOutline';

function BPM() {
    return (
      <>
        <ProjectOutline
            title = 'Automatic Blood Pressure Cuff'
            coverImage = {`${process.env.PUBLIC_URL}/images/projectImages/BPM/BPMSchematic.png`}
            embeddedDocument= {`${process.env.PUBLIC_URL}/documents/BPMpaper.pdf`}
        />
      </>
    );
}

export default BPM;