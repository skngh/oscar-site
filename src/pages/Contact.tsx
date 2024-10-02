import React from "react";
import "../styles/contact.css";

type HoverableComponentProps = {
  onMouseEnter: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Contact: React.FC<HoverableComponentProps> = ({
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="contact-container">
        <div className="page-header">CONTACT</div>
        <div className="email-text">
          <a href="mailto:oscarcompo1@gmail.com?subject=Contact Form">
            oscarcompo1@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
