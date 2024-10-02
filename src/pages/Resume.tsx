import React from "react";
import "../styles/resume.css";

type HoverableComponentProps = {
  onMouseEnter: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Resume: React.FC<HoverableComponentProps> = ({
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="resume-container">
        <div className="page-header">RESUME</div>
      </div>
    </div>
  );
};

export default Resume;
