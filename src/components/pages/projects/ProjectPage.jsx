import React from 'react';
import ProjectOutline from './ProjectOutline';

function ProjectPage() {
    return (
      <>
        <ProjectOutline
            title = 'Project Title'
            subtitle = 'Project Subtitle'
            coverImage = {`${process.env.PUBLIC_URL}/images/projectImages/morphyCollection.png`}
            overviewDescription='This is a placeholder overview description. should be <5 sentences'
            // embeddedDocument= {`${process.env.PUBLIC_URL}/documents/resume.pdf`}
        />
      </>
    );
}

export default ProjectPage;