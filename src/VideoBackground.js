import React from "react";
import ReactPlayer from "react-player";

const VideoBackground = ({ url, playing, loop, volume }) => (
  <div style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
    <ReactPlayer
      url={url}
      playing={playing}
      loop={loop}
      volume={volume}
      width="100%"
      height="100%"
      style={{
        filter: "saturate(0.1)", // zmniejszenie nasycenia
        contrast: "1.2", // zwiększenie kontrastu
      }}
    />
  </div>
);

export default VideoBackground;
