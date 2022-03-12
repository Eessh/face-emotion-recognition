import { Button, Modal, Toggle } from "../AnimatedComponents";
import { useSettingsContext } from "./SettingsContext";
import { CloseIcon } from "../Icons";

const SettingsModal = () => {

  const {
    overlayOn, setOverlayOn,
    faceDetectionOn, setFaceDetectionOn,
    faceLandmarksOn, setFaceLandmarksOn,
    emojiOn, setEmojiOn,
    settingsVisible, setSettingsVisible
  } = useSettingsContext();

  return(
    <Modal>
      <div className="w-full flex flex-row items-center justify-between mb-6">
        <span className="text-gray-600 text-2xl ml-2">Settings</span>
        <Button onClick={() => setSettingsVisible(false)}>
          <span
            className="rounded-full p-[0.125rem] mr-1 cursor-pointer transition-all hover:scale-110 bg-fg-1 hover:bg-fg-2"
          >
            <CloseIcon />
          </span>
        </Button>
      </div>
      <div className="w-full flex flex-row items-center justify-between mb-2">
        <span className="text-gray-600 text-xl ml-2">Video Overlay</span>
        <span className="mr-2">
          <Toggle
            initialState={overlayOn}
            onFunc={() => setOverlayOn(true)}
            offFunc={() => setOverlayOn(false)}
          />
        </span>
      </div>
      <div className="w-full flex flex-row items-center justify-between mb-2">
        <span className="text-gray-600 text-xl ml-2">Face Detection</span>
        <span className="mr-2">
          <Toggle
            initialState={faceDetectionOn}
            onFunc={() => setFaceDetectionOn(true)}
            offFunc={() => setFaceDetectionOn(false)}
          />
        </span>
      </div>
      <div className="w-full flex flex-row items-center justify-between mb-2">
        <span className="text-gray-600 text-xl ml-2">Face Landmarks</span>
        <span className="mr-2">
          <Toggle
            initialState={faceLandmarksOn}
            onFunc={() => setFaceLandmarksOn(true)}
            offFunc={() => setFaceLandmarksOn(false)}
          />
        </span>
      </div>
      <div className="w-full flex flex-row items-center justify-between mb-2">
        <span className="text-gray-600 text-xl ml-2">Display Emoji</span>
        <span className="mr-2">
          <Toggle
            initialState={emojiOn}
            onFunc={() => setEmojiOn(true)}
            offFunc={() => setEmojiOn(false)}
          />
        </span>
      </div>
    </Modal>
  );
};

export default SettingsModal;