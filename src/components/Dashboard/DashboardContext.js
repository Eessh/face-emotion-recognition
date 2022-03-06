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

const useFormatExpression = (currentExpression) => {
  if (currentExpression === undefined || currentExpression === null) {
    return null;
  }
  const expression = [];
  for (const [key, value] of Object.entries(currentExpression[0].expressions)) {
    expression.push({
      expression: key,
      percent: value*100
    });
  }
  return expression;
};

const useRecordExpression = (recordedExpressions, currentExpression) => {
  if (currentExpression === undefined || currentExpression === null) {
    return recordedExpressions;
  }
  const {clockTicks} = useDashboardContext();
  if (clockTicks === undefined || clockTicks === null) {
    throw new Error("Error: recordExpression() can only be used inside of DashboardContext.");
  }
  if (recordedExpressions.length < 1) {
    currentExpression.forEach((current) => {
      recordedExpressions.push({
        id: current.expression,
        data: [{
          x: clockTicks,
          y: current.percent
        }]
      });
    });
    return recordedExpressions;
  }
  currentExpression.forEach((current, index) => {
    recordedExpressions[index].data.push({
      x: clockTicks,
      y: current.percent    
    });
  });
  return recordedExpressions;
};

export {
  DashboardContextProvider,
  DashboardContextConsumer,
  useDashboardContext,
  expressions,
  useFormatExpression as formatExpression,
  useRecordExpression as recordExpression,
};