import React from "react";
import "../styles/socials.css";
import { ElfsightWidget } from "react-elfsight-widget";

type HoverableComponentProps = {
  onMouseEnter: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const Socials: React.FC<HoverableComponentProps> = ({
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="socials-container">
        <div className="page-header">SOCIALS</div>
        <div className="socials-grid">
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/oscar-compo-b4a48a296/"
              target="_blank"
            >
              <img
                src="./linkedin.png"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
          </div>
          <div className="instagram-widget">
            <ElfsightWidget widgetID="c55d8410-fc50-42cf-9278-3a4b61c955d0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
