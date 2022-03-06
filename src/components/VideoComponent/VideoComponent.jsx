import VideoStream from "../VideoStream";
import VideoStreamOverlay from "../VideoStreamOverlay";
import "./VideoComponent.css";

const VideoComponent = () => {
  return(
    <>
      <VideoStream />
      <VideoStreamOverlay />
    </>
  );
};

export default VideoComponent;