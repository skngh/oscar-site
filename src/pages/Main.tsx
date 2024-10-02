import MovingLine from "../components/MovingLine";
import Samples from "./Samples";
import Socials from "./Socials";
import Contact from "./Contact";
import "../styles/main.css";
import AnimatedLine from "../components/AnimatedLine";
import { useState } from "react";
import transition from "../transition";
import Resume from "./Resume";

const Main = () => {
  const lineStates = ["top-left", "top-right", "bottom-left", "bottom-right"];

  const [selectedIndex, setSelectedIndex] = useState(-2);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(0);

  return (
    <>
      <div className="container">
        <div className="button-grid">
          <Samples
            onMouseEnter={() => setSelectedIndex(0)}
            onMouseLeave={() => {
              setSelectedIndex(-1);
              setLastSelectedIndex(0);
            }}
          />
          <Socials
            onMouseEnter={() => setSelectedIndex(1)}
            onMouseLeave={() => {
              setSelectedIndex(-1);
              setLastSelectedIndex(1);
            }}
          />
          <Contact
            onMouseEnter={() => setSelectedIndex(2)}
            onMouseLeave={() => {
              setSelectedIndex(-1);
              setLastSelectedIndex(2);
            }}
          />
          <Resume
            onMouseEnter={() => setSelectedIndex(3)}
            onMouseLeave={() => {
              setSelectedIndex(-1);
              setLastSelectedIndex(3);
            }}
          />
          <div className="grid-button"></div>
          <div className="circle-container">
            <div className="circle"></div>
            <MovingLine
              className={
                selectedIndex == -1 || selectedIndex == -2
                  ? "default-circle rotate-circle"
                  : "default-circle hide-circle"
              }
            />
            <AnimatedLine
              containerClassName={
                selectedIndex == -2
                  ? "hide-line"
                  : selectedIndex == -1
                  ? "animated-line-image " + lineStates[lastSelectedIndex]
                  : "animated-line-image " + lineStates[selectedIndex]
              }
              className={
                selectedIndex == -2
                  ? "hide-line"
                  : selectedIndex == -1
                  ? "unanimate-line"
                  : "animate-line"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Main);
