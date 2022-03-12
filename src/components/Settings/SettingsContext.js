import { createContext, useContext, useState } from "react";

const SettingsContext = createContext({});

const SettingsContextProvider = ({children}) => {
  const [webcamOn, setWebcamOn] = useState(false);
  const [overlayOn, setOverlayOn] = useState(true);
  const [faceDetectionOn, setFaceDetectionOn] = useState(false);
  const [faceLandmarksOn, setFaceLandmarksOn] = useState(false);
  const [emojiOn, setEmojiOn] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(true);

  const contextValue = {
    webcamOn, setWebcamOn,
    overlayOn, setOverlayOn,
    faceDetectionOn, setFaceDetectionOn,
    faceLandmarksOn, setFaceLandmarksOn,
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