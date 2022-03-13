import { Button, Modal, Toggle } from "../AnimatedComponents";
import { useSettingsContext } from "./SettingsContext";
import { CloseIcon } from "../Icons";

const SettingsModal = () => {

  const {
    overlayOn, setOverlayOn,
    emojiOn, setEmojiOn,
    setSettingsVisible
  } = useSettingsContext();

  return(
    <Modal
      backdropClickEvent={() => setSettingsVisible(false)}
      extraClasses={"w-[300px] h-fit"}
    >
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
        <span className="text-gray-600 text-xl ml-2">Display Emoji</span>
        <span className="mr-2">
          <Toggle
            initialState={emojiOn}
            onFunc={() => setEmojiOn(true)}
            offFunc={() => setEmojiOn(false)}
          />
        </span>
      </div>
      <div className="w-full flex flex-row items-center justify-between mb-2">
        <span className="text-gray-600 text-xl ml-2">Face Landmarks</span>
        <span className="mr-2">
          <Toggle
            initialState={overlayOn}
            onFunc={() => setOverlayOn(true)}
            offFunc={() => setOverlayOn(false)}
          />
        </span>
      </div>
    </Modal>
  );
};

export default SettingsModal;