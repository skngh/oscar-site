import "../styles/header.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <h1 id="name">OSCAR COMPO</h1>
      <div className="second-header-container">
        <h2>Producer, Engineer, Songwriter</h2>
        <div className="vertical-line"></div>
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
        </div>
        <div>
          <Link className="home-button" to="/">
            HOME
          </Link>
        </div>
      </div>
      <div className="full-width-line"></div>
    </div>
  );
};

export default header;
