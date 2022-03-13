import VideoStream from "../VideoStream";
import VideoStreamOverlay from "../VideoStreamOverlay";
import EmojiWidget from "../EmojiWidget";
import WebcamTurnedOff from "../WebcamTurnedOff";
import { useSettingsContext } from "../Settings";
import "./VideoComponent.css";

const VideoComponent = () => {
  const {
    webcamOn, overlayOn,
    emojiOn
  } = useSettingsContext();
  return(
    <>
      {webcamOn ? <VideoStream /> : <WebcamTurnedOff />}
      {webcamOn && overlayOn && <VideoStreamOverlay />}
      {webcamOn && emojiOn && <span className="absolute top-8 right-8"><EmojiWidget /></span>}
    </>
  );
};

export default VideoComponent;