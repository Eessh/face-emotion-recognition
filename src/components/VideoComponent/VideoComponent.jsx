import VideoStream from "../VideoStream";
import VideoStreamOverlay from "../VideoStreamOverlay";
import WebcamTurnedOff from "../WebcamTurnedOff";
import { useSettingsContext } from "../Settings";
import "./VideoComponent.css";

const VideoComponent = () => {
  const {webcamOn, overlayOn} = useSettingsContext();
  return(
    <>
      {webcamOn ? <VideoStream /> : <WebcamTurnedOff />}
      {webcamOn && overlayOn && <VideoStreamOverlay />}
    </>
  );
};

export default VideoComponent;