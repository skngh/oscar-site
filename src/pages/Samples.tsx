import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../styles/samples.css";

type HoverableComponentProps = {
  onMouseEnter: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const samplesLocations = [
  "song.mp3",
  "song.mp3",
  "song.mp3",
  "song.mp3",
  "song.mp3",
];
const sampleNames = ["mySong!", "mysong2", "mysong3", "mysong4", "mysong5"];

const Samples: React.FC<HoverableComponentProps> = ({
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="sample-container">
        <div className="page-header sample-header">SAMPLES</div>
        <div className="audio-player-container">
          {samplesLocations.map((loc, index) => (
            <>
              <div className="song-names">{sampleNames[index]}</div>
              <AudioPlayer
                src={"/audio/" + loc}
                showJumpControls={false}
                showDownloadProgress={false}
              ></AudioPlayer>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Samples;
