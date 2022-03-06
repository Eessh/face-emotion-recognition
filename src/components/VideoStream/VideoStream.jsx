import { useCallback, useEffect, useRef } from "react";
import { detectFaces } from "../../utils/faceAPI";
import { useDashboardContext, useFormatExpression, useRecordExpression } from "../Dashboard";
import Webcam from "react-webcam";
import "./VideoStream.css";

const VideoConstraints = {
  facingMode: "user"
}

const VideoStream = () => {
  const webcamRef = useRef(null);
  const {
    setClockTicks,
    setCurrentExpression,
    setRecordedExpressions,
    setMountedVideoComponent
  } = useDashboardContext();

  useEffect(() => {
    setTimeout(() => {
      setMountedVideoComponent(true);
    }, 2000);
    // Calling getFaces() 2-times every second
    // detects the faces, emotions in the video stream 2-times per second
    const tick = setInterval(async () => {
      setClockTicks((t) => t+1);
      await getFaces();
    }, 1000);
    return() => {
      clearInterval(tick);
    }
  }, []);

  // const pushFormattedExpression = (recordedExpressions, latestExpression) => {
  //   console.log("latestExpression: ", latestExpression);
  //   if (latestExpression === null || latestExpression === undefined) {
  //     return recordedExpressions;
  //   }
  //   const expressions = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "suprised"];
  //   if (recordedExpressions.length < 1) {
  //     latestExpression.forEach((latest) => {
  //       recordedExpressions.push({
  //         id: latest.expression,
  //         data: [{
  //           x: clockTicks,
  //           y: latest.percent
  //         }]
  //       })
  //     });
  //     return recordedExpressions;
  //   }
  //   latestExpression.forEach((latest, index) => {
  //     recordedExpressions[index].data.push({
  //       x: clockTicks,
  //       y: latest.percent
  //     });
  //   });
  //   return recordedExpressions;
  // };

  const getFaces = useCallback(async () => {
    if (webcamRef.current != null) {
      const expression = await detectFaces(webcamRef.current.video);
      await setCurrentExpression(expression);
      await setRecordedExpressions((recordedExpressions) => {
        console.log("Recorded Expressions: ", recordedExpressions);
        return useRecordExpression(recordedExpressions, useFormatExpression(info));
      });
    }
  }, [webcamRef]);

  return(
    <Webcam
      audio={false}
      ref={webcamRef}
      videoConstraints={VideoConstraints}
    />
  );
};

export default VideoStream;