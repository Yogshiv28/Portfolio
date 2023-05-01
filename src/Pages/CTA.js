import React from 'react';
import "../Styles/CTA.css";
import CV from "../assets/cv.pdf"
const CTA = () => {
    return (
      <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="/Contact" className='btn'>Let's Talk</a>
         
      </div>
    )
  }
  
  export default CTA