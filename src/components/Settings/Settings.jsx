import { useSettingsContext } from "./SettingsContext";
import "./Settings.css";

const Settings = () => {
  const {
    webcamOn, setWebcamOn,
    overlayOn, setOverlayOn,
    faceDetectionOn, setFaceDetectionOn,
    emojiAnimationOn, setEmojiAnimationOn
  } = useSettingsContext();
};

export default Settings;