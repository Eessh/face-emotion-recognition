import { createContext, useContext, useLayoutEffect, useRef, useState } from "react";

const DashboardContext = createContext({});
const expressions = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"];

const DashboardContextProvider = ({children}) => {
  const [currentExpression, setCurrentExpression] = useState(null);
  const [emoji, setEmoji] = useState(null);
  const [recordedExpressions, setRecordedExpressions] = useState([]);
  const [recordedExpressionsVisible, setRecordedExpressionsVisible] = useState(false);
  const [recordedExpressions2, setRecordedExpressions2] = useState([]);
  const [mountedVideoComponent, setMountedVideoComponent] = useState(false);
  const canvasRef = useRef();

  const contextValue = {
    currentExpression, setCurrentExpression,
    emoji, setEmoji,
    recordedExpressions, setRecordedExpressions,
    recordedExpressionsVisible, setRecordedExpressionsVisible,
    recordedExpressions2, setRecordedExpressions2,
    mountedVideoComponent, setMountedVideoComponent,
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
