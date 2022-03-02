import { useState } from "react";
import VideoStream from "../VideoStream";
import VideoStreamOverlay from "../VideoStreamOverlay";
import "./VideoComponent.css";

const VideoComponent = () => {
  const [info, setInfo] = useState(null);

  return(
    <div className="video-component">
      <VideoStream setInfo={setInfo} />
      <VideoStreamOverlay info={info} />
    </div>
  );
};

export default VideoComponent;