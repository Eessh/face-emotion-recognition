import React, { createContext, useContext, useRef, useState } from "react";

/**
 * @typedef DashboardContextType
 * @type {object}
 * @property {boolean} loadedModels - Tells whether models are loaded or not.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setLoadedModels - State modifier of loadedModels
 * @property {boolean} mountedVideoComponent - Tells whether VideoComponent is mounted or not.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setMountedVideoComponent - State modifier of mountedVideoComponent
 * @property {object} currentExpression - Holds the current expression detected from the video stream.
 * @property {React.Dispatch<React.SetStateAction<object>>} setCurrentExpression - State modifier of currentExpression.
 * @property {string} emoji - Holds the name of the emoji expression.
 * @property {React.Dispatch<React.SetStateAction<string>>} setEmoji - State modifier of emoji.
 * @property {[object]} recordedExpressions - Holds the expressions recorded from the video stream.
 * @property {React.Dispatch<React.SetStateAction<[object]>>} setRecordedExpressions - State modifier of recordedExpressions.
 * @property {boolean} recordedExpressionsVisible - Tells whether the RecordedExpressionsModal is visible or not.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setRecordedExpressionsVisible - State modifier of recordedExpressionsVisible.
 * @property {React.MutableRefObject<any>} canvasRef - Mutable Ref for the VideoOverlay
 */

/** @type {DashboardContextType} */
const DashboardContext = createContext({});

/**
 * @type {[string]} expressions - List of expressions, those can be detected.
 */
const expressions = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"];

const DashboardContextProvider = ({children}) => {
  const [loadedModels, setLoadedModels] = useState(false);
  const [mountedVideoComponent, setMountedVideoComponent] = useState(false);
  const [currentExpression, setCurrentExpression] = useState(null);
  const [emoji, setEmoji] = useState(null);
  const [recordedExpressions, setRecordedExpressions] = useState([]);
  const [recordedExpressionsVisible, setRecordedExpressionsVisible] = useState(false);
  const canvasRef = useRef();

  const contextValue = {
    loadedModels, setLoadedModels,
    mountedVideoComponent, setMountedVideoComponent,
    currentExpression, setCurrentExpression,
    emoji, setEmoji,
    recordedExpressions, setRecordedExpressions,
    recordedExpressionsVisible, setRecordedExpressionsVisible,
    canvasRef
  };

  return(
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  );
};

const DashboardContextConsumer = ({children}) => {
  return(
    <DashboardContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error("Error: useDashboardContext() can only be used inside of DashboardContext.");
        }
        return children(context);
      }}
    </DashboardContext.Consumer>
  );
};

/**
 * Custom hook for accessing DashboardContext(only inside of DashboardContextProvider).
 * @returns {DashboardContextType} - Returns DashboardContext
 */
const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("Error: useDashboardContext() can only be used inside of DashboardContext.");
  }
  return context;
};

export {
  DashboardContextProvider,
  DashboardContextConsumer,
  useDashboardContext,
  expressions,
};
