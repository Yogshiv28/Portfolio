import React from "react";
import "../Styles/Home.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CTA from "./CTA";

const home = () => {
    return(
      <div className="home" >
      <div className="about">
        <h2> Hi, My Name is Yogesh </h2>
        <div className="prompt">
          <p>A software developer</p>
          <LinkedInIcon onClick ={()=>window.open('https://www.linkedin.com/in/yogesh-shivde-58b203235/')} />
          <EmailIcon  onClick ={() => window.open('/Contact')}/>
          <GitHubIcon onClick ={()=>window.open('https://github.com/Yogshiv28/')} />
          <CTA/>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
               BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,Express,MySQL, MongoDB 
              
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>






    );

}

export default home;