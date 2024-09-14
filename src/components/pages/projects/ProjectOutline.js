import React from 'react';
import Navbar from '../../Navbar';

function ProjectOutline(props) {
  return (
    <>
        <Navbar />
        <div className='projectOutline'>
            <h1>{props.title}</h1>
            <div className='projectOutline__container'>
            <div className='projectOutline__wrapper'>
                <ul className='projectOutline__items'>
                <li>
                    <img src={props.image} alt={props.alt} />
                </li>
                <li>
                    <p>{props.description}</p>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </>
  );
}

export default ProjectOutline;
