import { useCallback, useEffect, useRef } from "react";
import { detectFaces, drawResults } from "../../utils/faceAPI";
import { useDashboardContext } from "../Dashboard";
import { useSettingsContext } from "../Settings";
import Webcam from "react-webcam";
import "./VideoStream.css";

const VideoConstraints = {
  facingMode: "user"
}

const VideoStream = () => {
  const webcamRef = useRef(null);
  const {
    setCurrentExpression,
    setEmoji,
    setRecordedExpressions,
    setMountedVideoComponent,
    canvasRef
  } = useDashboardContext();
  const {
    webcamOn,
    overlayOn,
  } = useSettingsContext();

  // Sets mountedVideoComponent to true after 2seconds, when this component is mounted.
  useEffect(() => {
    setTimeout(() => {
      webcamOn && setMountedVideoComponent(true);
    }, 2000);
  });

  useEffect(() => {
    // Calling getFaces() 2-times every second
    // detects the faces, emotions in the video stream 2-times per second
    const tick = setInterval(async () => {
      await getFaces();
    }, 500);
    return() => {
      clearInterval(tick);
    }
  });

  /**
   * 
   * @param {Object} info - Object with details of Age, Expressions, ...
   * @returns {Object} - Returns expression of the first face recorded.
   */
  const formatExpression = (info) => {
    if (
      info === undefined ||
      info === null ||
      info[0] === undefined ||
      info[0] === null ||
      info[0].expressions === undefined ||
      info[0].expressions === null
    ) {
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

  /**
   * 
   * @param {Array} formattedExpression - Formatted expression
   * @returns {String} - Returns the emoji name.
   */
  const getEmojiName = (formattedExpression) => {
    if (formattedExpression === null || formattedExpression === undefined || formattedExpression.length < 1) {
      return null;
    }
    let emojiName = null, maxPercent = Number.NEGATIVE_INFINITY;
    formattedExpression.forEach((expr) => {
      if (expr.percent > maxPercent) {
        emojiName = expr.expression;
        maxPercent = expr.percent;
      }
    });
    return emojiName;
  };

  /**
   * 
   * @param {Array} recordedExpressions - Expressions recorded upto this point of time.
   * @param {Object} currentExpression - Current expression from the video stream
   * @returns {Array} - Returns an array of recorded expressions
   */
  const recordExpression = (recordedExpressions, currentExpression) => {
    if (currentExpression === undefined || currentExpression === null) {
      return recordedExpressions;
    }
    if (recordedExpressions.length < 1) {
      currentExpression.forEach((current) => {
        recordedExpressions.push({
          id: current.expression,
          data: [{
            x: 0,
            y: current.percent
          }]
        });
      });
      return recordedExpressions;
    }
    currentExpression.forEach((current, index) => {
      recordedExpressions[index].data.push({
        x: recordedExpressions[index].data.length+1,
        y: current.percent
      });
    });
    return recordedExpressions;
  };

  /**
   * 1) Detects faces from the VideoStream from the Webcam.
   * 2) Draws the face detections, face landmarks onto the VideoStreamOverlay.
   * 3) Sets the emoji expression.
   * 4) Records the expression.
   */
  const getFaces = useCallback(async () => {
    if (webcamRef.current != null) {
      const info = await detectFaces(webcamRef.current.video);
      if (webcamOn && overlayOn && webcamRef.current != null) {
        await drawResults(webcamRef.current.video, canvasRef.current, info, "boxLandmarks");
      }
      const formattedExpression = formatExpression(info);
      await setEmoji((previousEmoji) => {
        if (formattedExpression === undefined || formattedExpression === null) {
          return previousEmoji;
        }
        const name = getEmojiName(formattedExpression);
        if (name === null) {
          return previousEmoji;
        }
        return name;
      });
      await setCurrentExpression((previousExpression) => {
        if (formattedExpression === undefined || formattedExpression === null) {
          return previousExpression;
        }
        return formattedExpression;
      });
      await setRecordedExpressions((recordedExpressions) => {
        if (formattedExpression === undefined || formattedExpression === null) {
          return recordedExpressions;
        }
        return recordExpression(recordedExpressions, formatExpression(info));
      });
    }
  }, [webcamRef]);

  return(
    <Webcam
      audio={false}
      ref={webcamRef}
      videoConstraints={VideoConstraints}
      className="shadow-2xl rounded-lg w-[300px] sm:w-[600px] md:w-[700px]"
    />
  );
};

export default VideoStream;