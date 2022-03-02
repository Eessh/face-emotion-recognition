import { useCallback, useEffect, useRef, useState } from "react";
import { detectFaces } from "../../utils/faceAPI";
import Webcam from "react-webcam";
import "./VideoStream.css";

const VideoConstraints = {
  facingMode: "user"
}

const VideoStream = ({ setInfo }) => {
  const webcamRef = useRef(null);

  useEffect(() => {
    // Calling getFaces() 2-times every second
    // detects the faces, emotions in the video stream 2-times per second
    const tick = setInterval(async () => {
      await getFaces();
    }, 500);
    return() => {
      clearInterval(tick);
    }
  }, []);

  const getFaces = useCallback(async () => {
    if (webcamRef.current != null) {
      const info = await detectFaces(webcamRef.current.video);
      setInfo(info);
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