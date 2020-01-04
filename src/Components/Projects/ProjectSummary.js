import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-sumary">
      <div className="card-content grey-txt text-darken">
        <span className="card-title">{project.title}</span>
        <p>Posted by tandavala</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
