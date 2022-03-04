import { useState } from "react";
import VideoComponent from "../VideoComponent";
import RealTimeEmotion from "../RealTimeEmotion";
import RealTimeEmotionAnalysis from "../RealTimeEmotionAnalysis";
import "./Dashboard.css";

const Dashboard = () => {

  const [info, setInfo] = useState([
    {
      expressions: {
        neutral: 0.9986047148704529,
        happy: 0.00012171591515652835,
        sad: 0.000008243303454946727,
        angry: 0,
        fearful: 0,
        disgusted: 0,
        surprised: 0.0012175944866612554
      }
    }
  ]);
  const [mountedVideoComponent, setMountedVideoComponent] = useState(false);
  const [clockTicks, setClockTicks] = useState(0);
  const [recordedExpressions, setRecordedExpressions] = useState([]);

  const getFormattedExpressions = (info) => {
    if (info.length < 1) {
      return null;
    }
    const expressions = [];
    for (const [key, value] of Object.entries(info[0].expressions)) {
      expressions.push({
        expression: key,
        percent: value*100
      })
    }
    // console.log("Age: ", info[0].age);
    // console.log("Expressions: ", expressions);
    return expressions;
  };

  return(
    <div className="dashboard flex-1 w-full flex flex-row">
      <div className="dashboard-left w-fit flex flex-col">
        <div className="videocomponent flex-1">
          <VideoComponent
            clockTicks={clockTicks}
            setClockTicks={setClockTicks}
            info={info}
            setInfo={setInfo}
            setRecordedExpressions={setRecordedExpressions}
            getFormattedExpressions={getFormattedExpressions}
            setMountedVideoComponent={setMountedVideoComponent}
          />
        </div>
        <div className="realtime-emotion flex flex-row items-center justify-center h-full">
          <RealTimeEmotion
            expressions={getFormattedExpressions(info)}
            mountedVideoComponent={mountedVideoComponent}
          />
        </div>
      </div>
      <div className="dashboard-right flex-1">
        <div className="realtime-emotion-analysis w-full h-full">
          <RealTimeEmotionAnalysis
            clockTicks={clockTicks}
            recordedExpressions={recordedExpressions}
            mountedVideoComponent={mountedVideoComponent}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;