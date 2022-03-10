import { useSettingsContext } from "./SettingsContext";
import "./Settings.css";
import { Button, Toggle } from "../AnimatedComponents";

const Settings = () => {
  const {
    webcamOn, setWebcamOn,
    overlayOn, setOverlayOn,
    faceDetectionOn, setFaceDetectionOn,
    emojiAnimationOn, setEmojiAnimationOn
  } = useSettingsContext();

  return(
    <div className="flex flex-row justify-between mx-4 px-4 py-2 bg-bg-2 rounded-2xl shadow-2xl border-2 border-fg-1">
      <div className="flex flex-row">
        <span className="flex flex-row items-center justify-center text-gray-600 text-xl mr-4">Webcam</span>
        <span className="flex flex-col items-center justify-center">
          <Toggle
            initialState={webcamOn}
            onFunc={() => setWebcamOn(true)}
            offFunc={() => setWebcamOn(false)}
          />
        </span>
      </div>
      <Button
        onClick={() => console.log("clicked settings")}
        rotateAnimation={true}
      >
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="gray" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </Button>
    </div>
  );
};

export default Settings;