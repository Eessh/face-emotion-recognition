import { createContext, useContext, useState } from "react";

const DashboardContext = createContext({});
const expressions = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"];

const DashboardContextProvider = ({children}) => {
  const [clockTicks, setClockTicks] = useState(0);
  const [currentExpression, setCurrentExpression] = useState({});
  const [recordedExpressions, setRecordedExpressions] = useState([]);
  const [mountedVideoComponent, setMountedVideoComponent] = useState(false);

  const contextValue = {
    clockTicks, setClockTicks,
    currentExpression, setCurrentExpression,
    recordedExpressions, setRecordedExpressions,
    mountedVideoComponent, setMountedVideoComponent
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