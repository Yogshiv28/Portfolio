import React from "react";

import {useParams}   from "react-router-dom";
import {ProjectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/ProjectDisplay.css";

function ProjectDisplay() {
  const {id} = useParams();
  const project =  ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="images" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon onClick ={()=>window.open('https://github.com/Yogshiv28/')} />
    </div>
  );
}
export default ProjectDisplay;