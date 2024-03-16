import React, { useRef } from 'react';

const DownloadCV = () => {
  const cvRef = useRef(null);

  const downloadCV = () => {
    cvRef.current.click();
  };

  return (
    <div>
      <a href="https://github.com/SarthakEkhande/Netflix-gpt/blob/main/public/Sarthak_Ekhande_Resume_9764135683.pdf" ref={cvRef} download="Your_CV.pdf" style={{ display: 'none' }}>Download CV</a>
      <button onClick={downloadCV}>Download CV</button>
    </div>
  );
};

export default DownloadCV;
