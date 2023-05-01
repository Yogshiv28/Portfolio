import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon  onClick ={()=>window.open('https://www.instagram.com/im_yogeshshivde86/')} />
        <TwitterIcon />
       
        <LinkedInIcon onClick ={()=>window.open('https://www.linkedin.com/in/yogesh-shivde-58b203235/')} />
      </div>
      <p> &copy; 2023 YogiTech.com</p>
    </div>
  );
}

export default Footer;