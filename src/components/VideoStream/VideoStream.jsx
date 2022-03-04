import { useCallback, useEffect, useRef } from "react";
import { detectFaces } from "../../utils/faceAPI";
import Webcam from "react-webcam";
import "./VideoStream.css";

const VideoConstraints = {
  facingMode: "user"
}

const VideoStream = ({ clockTicks, setClockTicks, setInfo, setRecordedExpressions, getFormattedExpressions, setMountedVideoComponent }) => {
  const webcamRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setMountedVideoComponent(true);
    }, 2000);
    // Calling getFaces() 2-times every second
    // detects the faces, emotions in the video stream 2-times per second
    const tick = setInterval(async () => {
      setClockTicks((t) => t+1);
      await getFaces();
    }, 5000);
    return() => {
      clearInterval(tick);
    }
  }, []);

  const pushFormattedExpression = (recordedExpressions, latestExpression) => {
    console.log("latestExpression: ", latestExpression);
    if (latestExpression === null || latestExpression === undefined) {
      return recordedExpressions;
    }
    const expressions = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "suprised"];
    if (recordedExpressions.length < 1) {
      latestExpression.forEach((latest) => {
        recordedExpressions.push({
          id: latest.expression,
          data: [{
            x: clockTicks,
            y: latest.percent
          }]
        })
      });
      return recordedExpressions;
    }
    latestExpression.forEach((latest, index) => {
      recordedExpressions[index].data.push({
        x: clockTicks,
        y: latest.percent
      });
    });
    return recordedExpressions;
  };

  const getFaces = useCallback(async () => {
    if (webcamRef.current != null) {
      const info = await detectFaces(webcamRef.current.video);
      await setInfo(info);
      await setRecordedExpressions((recordedExpressions) => {
        console.log("Recorded Expressions: ", recordedExpressions);
        return pushFormattedExpression(recordedExpressions, getFormattedExpressions(info))
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