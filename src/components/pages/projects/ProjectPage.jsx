import React from 'react';
import './ProjectPage.css';
import ProjectOutline from './ProjectOutline';

function ProjectPage() {
    return (
      <>
        <ProjectOutline
            title = 'Project Title'
            image = '/images/projectImages/placeholder.jpg'
            alt = 'placeholder'
            description = 'This is a placeholder description'
        />
      </>
    );
}

export default ProjectPage;