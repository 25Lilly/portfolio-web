import React from 'react';
import '../../../App.css';
import Navbar from '../../Navbar';
import './ProjectOutline.css';

function generateSections(sections, section_content, embeddedDocument) {
    let sectionList = [];
    for (let i = 0; i < sections.length; i++) {
        let content = []
        for (let j = 0; j < section_content[i].length; j++) {
            if (section_content[i][j].includes('png') || section_content[i][j].includes('jpg') || section_content[i][j].includes('jpeg')) {
                content.push(
                    <div className='projectOutline__image'>
                        <img src={section_content[i][j]} alt={section_content[i][j]} />
                    </div>
                );
            } else if  (section_content[i][j].includes('mp4') || section_content[i][j].includes('.mov')) {
                content.push(
                    <video className='projectOutline__video' src={section_content[i][j]} autoPlay loop muted />
                );
            } 
            else if (section_content[i][j].includes('Figure')) {
                content.push(
                    <div className='projectOutline__figureText'>
                            <p>{section_content[i][j]}</p>
                    </div>
                );
            } else
                content.push(
                    <div className='projectOutline__text'>
                        <p>{section_content[i][j]}</p>
                    </div>
            );
        }
        if (sections[i] === 'embeddedDocument') {
            sectionList.push(
                <div className='projectOutline__document'>
                    <iframe title='project-document' src={embeddedDocument} width="100%" height="1000px"></iframe>
                </div>
            );
        } else {
            sectionList.push(
                <div className='projectOutline__section'>
                    <h1>{sections[i]}</h1>
                    {content}
                </div>
            );
        }
    }
    return sectionList;
}

function digestCoverImage(coverImage, alt) {
    if (coverImage.includes('mp4') || coverImage.includes('mov')) {
        coverImage = <video src={coverImage} autoPlay loop muted />
    } else {
        coverImage = <img src={coverImage} alt={alt} />
    }
    return coverImage;
}

function ProjectOutline({ title, subtitle, coverImage, alt, overviewDescription, sections, section_content, embeddedDocument}) {
    const sectionElements = generateSections(sections, section_content, embeddedDocument);
    const coverImageElement = digestCoverImage(coverImage, alt);

    return (
    <>
        <Navbar />
        <div className='projectOutline'>
            <div className='projectOutline__hero-section'>
                {coverImageElement}
                <div className="shadow-box">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </div>
            <div className='projectOutline__overview'>
                <p>{overviewDescription}</p>
            </div>
            <div className="projectOutline__sections">
                {sectionElements}
            </div>
        </div>
    </>
  );
}

export default ProjectOutline;
