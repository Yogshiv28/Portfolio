import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import SchoolIcon from '@mui/icons-material/School';
  import WorkIcon from '@mui/icons-material/Work';
const Experience = () => {
    
    return(
        <div className="experience">
      <VerticalTimeline lineColor="#242B2E">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2017"
          iconStyle={{ background: "#242B2E", color: "#e9d35b" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            S.H.G.Shroff High School, Nandubar, Maharashtra
          </h3>
          <p>  School </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2019"
          iconStyle={{ background: "#242B2E", color: "#e9d35b" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            G.T.Patil College, Nandubar, Maharashtra
          </h3>
          <p> High School </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#242B2E", color: "#e9d35b" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Savitribai Phule Pune University, Pune , Maharashta
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - Prsent"
          iconStyle={{ background: "#242B2E", color: "#e9d35b" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer (Student)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pune
          </h4>
          <p>Developed Projects </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2023 - present"
          iconStyle={{ background: "#242B2E", color: "#e9d35b" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Software Developer Freelancer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pune
          </h4>
          <p>
           Developed Personal Projects
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>

    );

}

export default Experience;