import "../styles/header.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <div className="second-header-container">
        <div className="name">OSCAR COMPO</div>
        <div className="roles">Producer, Engineer, Songwriter</div>
        {/* <div className="vertical-line"></div> */}
        <div className="icon-container">
          <a href="https://www.instagram.com/isthisoscarzc/" target="_blank">
            <img
              className="social-icons"
              src="../../public/instagram_black.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-compo-b4a48a296/"
            target="_blank"
          >
            <img
              className="social-icons"
              src="../../public/linkedin.png"
              alt="Linkedin"
            />
          </a>
          <Link className="home-button" to="/">
            HOME
          </Link>
        </div>
        <div></div>
      </div>
      {/* <div className="full-width-line"></div> */}
    </div>
  );
};

export default header;
