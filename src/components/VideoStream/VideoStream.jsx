import { useCallback, useEffect, useRef } from "react";
import { detectFaces } from "../../utils/faceAPI";
import { useDashboardContext } from "../Dashboard";
import Webcam from "react-webcam";
import "./VideoStream.css";

const VideoConstraints = {
  facingMode: "user"
}

const VideoStream = () => {
  const webcamRef = useRef(null);
  const {
    clockTicks, setClockTicks,
    setCurrentExpression,
    setRecordedExpressions,
    setRecordedExpressions2,
    setMountedVideoComponent
  } = useDashboardContext();

  useEffect(() => {
    setTimeout(() => {
      setMountedVideoComponent(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setClockTicks(t => t+1);
      console.log("clockTicks: ", clockTicks);
    }, 500);
  }, [clockTicks]);

  useEffect(() => {
    // Calling getFaces() 2-times every second
    // detects the faces, emotions in the video stream 2-times per second
    const tick = setInterval(async () => {
      // await incClockTicks();
      await getFaces();
    }, 500);
    return() => {
      clearInterval(tick);
    }
  }, []);

  const incClockTicks = async () => {
    await setClockTicks(t => t+1);
  }

  const formatExpression = (info) => {
    if (info === undefined || info === null) {
      return null;
    }
    const expression = [];
    for (const [key, value] of Object.entries(info[0].expressions)) {
      expression.push({
        expression: key,
        percent: value*100
      });
    }
    return expression;
  };

  const recordExpression = (recordedExpressions, currentExpression) => {
    if (currentExpression === undefined || currentExpression === null) {
      return recordedExpressions;
    }
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
        // x: clockTicks,
        x: recordedExpressions[index].data.length+1,
        y: current.percent
      });
    });
    return recordedExpressions;
  };

  const getFaces = useCallback(async () => {
    if (webcamRef.current != null) {
      const info = await detectFaces(webcamRef.current.video);
      await setCurrentExpression(formatExpression(info));
      await setRecordedExpressions((recordedExpressions) => {
        console.log("Recorded Expressions: ", recordedExpressions);
        return recordExpression(recordedExpressions, formatExpression(info));
      });
      await setRecordedExpressions2((recordedExpressions2) => {
        return [...recordedExpressions2, info[0].expressions];
      });
    }
  }, [webcamRef]);

  return(
    <Webcam
      audio={false}
      ref={webcamRef}
      videoConstraints={VideoConstraints}
      className="shadow-2xl"
    />
  );
};

export default VideoStream;