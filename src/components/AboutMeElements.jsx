import React, { useState } from 'react';

function AboutMeElements() {
  const [selected, setSelected] = useState('resume');

  const content = {
    skills: <p>I like stuff</p>,
    resume:
            <div class="object-container">
                <object data={`${process.env.PUBLIC_URL}/documents/resume.pdf`} type="application/pdf" width="70%" height="100%">
                    <p>It appears you don't have a PDF plugin for this browser. You can <a href="\files\resume.pdf">click here to download the PDF file.</a></p>
                </object>
            </div>,
    timeline: <p>I'm cool</p>,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px', justifyContent: 'center' }}>
      <div style={{ width: '90%', marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
        {/* <button onClick={() => setSelected('skills')} style={{ ...buttonStyle, flex: '1 1 30%' }}>Skills</button> */}
        <button onClick={() => { setSelected('resume'); window.location.reload(); }} style={{ ...buttonStyle, flex: '1 1 30%' }}>Resume</button>
      {/* <button onClick={() => setSelected('timeline')} style={{ ...buttonStyle, flex: '1 1 30%' }}>Experience Timeline</button> */}
      </div>
      <div style={{ textAlign: 'center', width: '90%' }}>
        {content[selected]}
      </div>
    </div>
  );
}

// Inline style for buttons
const buttonStyle = {
    fontSize: '2rem',
    cursor: 'pointer',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgb(10, 20, 100)',
    color: '#fff',
};

export default AboutMeElements;
