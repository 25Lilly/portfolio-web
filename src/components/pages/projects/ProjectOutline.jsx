import React from 'react';
import '../../../App.css';
import Navbar from '../../Navbar';
import './ProjectOutline.css';

function ProjectOutline({ title, subtitle, coverImage, alt, description, overviewDescription, embeddedDocument}) {
  return (
    <>
        <Navbar />
        <div className='projectOutline'>
            <div className='projectOutline__hero-section'>
                <img src={coverImage} alt={alt} />
                <div className="shadow-box">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </div>
            <div className='projectOutline__overview'>
                {/* <h1>Overview</h1> */}
                <p>{overviewDescription}</p>
            </div>

            <div className='projectOutline__container'>
                <p>{description}</p>
            </div>
            <div className='projectOutline__container'>
                <iframe title='project-document' src={embeddedDocument} width="100%" height="1000px"></iframe>
            </div>
        </div>
    </>
  );
}

export default ProjectOutline;
