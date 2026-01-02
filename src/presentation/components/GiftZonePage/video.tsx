import React, { useState } from "react";
import { FullScreenVideo } from "../common/full-screen-video";
import ReactPlayer from "react-player";

const Video = () => {
  const [currentVideo, setCurrentVideo] = useState<string>();

  function onVideoOpen() {
    setCurrentVideo("https://www.youtube.com/watch?v=LXb3EKWsInQ");
  }

  return (
    <>
      <FullScreenVideo videoUrl={currentVideo} setVideoUrl={setCurrentVideo} />
      <div className="relative flex overflow-hidden rounded-[9.14px] mx-[16px]">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width={"100%"}
          playing={false}
          style={{ pointerEvents: "none" }}
        />
        {/* Open full screen */}
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onVideoOpen();
          }}
        />
      </div>
    </>
  );
};

export { Video };
