import React from 'react';
import Navbar from '../../Navbar';

function ProjectOutline({ title, image, alt, description }) {
  return (
    <>
        <Navbar />
        <div className='projectOutline'>
            <h1>{title}</h1>
            <div className='projectOutline__container'>
            <div className='projectOutline__wrapper'>
                <ul className='projectOutline__items'>
                <li>
                    <img src={image} alt={alt} />
                </li>
                <li>
                    <p>{description}</p>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </>
  );
}

export default ProjectOutline;
