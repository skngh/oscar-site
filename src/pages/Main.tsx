import Header from "../components/Header";
import Button from "../components/Button";
import MovingLine from "../components/MovingLine";
import "../styles/main.css";
import AnimatedLine from "../components/AnimatedLine";
import { useState } from "react";

const Main = () => {
  const lineStates = ["top-left", "top-right", "bottom-left", "bottom-right"];
  const imageLocations = [
    "/buttonImageTest.jpg",
    "/test2.png",
    "/test3.png",
    "/test4.png",
  ];
  const textNames = ["SAMPLES", "CREDITS", "PICS", "CONTACT"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        <div className="button-grid">
          {imageLocations.map((img, index) => (
            <Button
              key={img}
              imageUrl={img}
              onHover={() => setSelectedIndex(index)}
              onLeave={() => {
                setSelectedIndex(-1);
                setLastSelectedIndex(index);
              }}
            >
              {textNames[index]}
            </Button>
          ))}
          <div className="circle-container">
            <div className="circle"></div>

            <MovingLine
              className={
                selectedIndex == -1
                  ? "default-circle rotate-circle"
                  : "default-circle hide-circle"
              }
            />
            <AnimatedLine
              containerClassName={
                selectedIndex == -1
                  ? "animated-line-image " + lineStates[lastSelectedIndex]
                  : "animated-line-image " + lineStates[selectedIndex]
              }
              className={
                selectedIndex == -1 ? "unanimate-line" : "animate-line"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
