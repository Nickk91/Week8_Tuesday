import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };
  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <h1>Video Player</h1>
      {/* Video element with ref */}
      <video ref={videoRef} width="640" height="360" controls>
        <source src="vite-project\src\assets\Side2Side.mp4" type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>

      <button onClick={playVideo}>play</button>

      <button onClick={pauseVideo}>pause</button>
    </div>
  );
};

export default VideoPlayer;
