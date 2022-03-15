import { createContext, useContext, useState } from "react";

/**
 * @typedef SettingsContextType
 * @type {object}
 * @property {boolean} webcamOn - Tells whether Webcam is on or not.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setWebcamOn - State modifier of webcamOn.
 * @property {boolean} overlayOn - Tells whether VideoStreamOverlay is present or not.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setOverlayOn - State modifier of overlayOn.
 * @property {boolean} emojiOn - Tells whether EmojiWidget is present or not.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setEmojiOn - State modifier of emojiOn.
 * @property {boolean} settingsVisible - Tells whether the SettingsModal is visible or not.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setSettingsVisible - State modifier of settingsVisible.
 */

/**
 * @type {SettingsContextType}
 */
const SettingsContext = createContext({});

const SettingsContextProvider = ({children}) => {
  const [webcamOn, setWebcamOn] = useState(false);
  const [overlayOn, setOverlayOn] = useState(true);
  const [emojiOn, setEmojiOn] = useState(true);
  const [settingsVisible, setSettingsVisible] = useState(false);

  const contextValue = {
    webcamOn, setWebcamOn,
    overlayOn, setOverlayOn,
    emojiOn, setEmojiOn,
    settingsVisible, setSettingsVisible
  };

  return(
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

const SettingsContextConsumer = ({children}) => {
  return(
    <SettingsContext.Consumer>
      {(context) => {
        if (context === undefined || context === null) {
          throw new Error("Error: useSettingsContext() can only be used inside of SettingsContext");
        }
        return children(context);
      }}
    </SettingsContext.Consumer>
  );
};

/**
 * Custom hook for accessing SettingsContext(only inside of SettingsContextProvider).
 * @returns {SettingsContextType} - Returns SettingsContext
 */
const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (context === undefined || context === null) {
    throw new Error("Error: useSettingsContext() can only be used inside of SettingsContext");
  }
  return context;
};

export {
  SettingsContextProvider,
  SettingsContextConsumer,
  useSettingsContext
};