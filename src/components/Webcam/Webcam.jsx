import { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import "./Webcam.css";

const VideoConstraints = {
  width: 1080,
  height: 720,
  facingMode: "user"
}

const WebcamComponent = () => {
  const videoRef = useRef(null);

  const handleVideoStream = useCallback((stream) => {
    // TODO
  }, [videoRef]);

  return(
    <Webcam
      audio={false}
      ref={videoRef}
      videoConstraints={VideoConstraints}
      onUserMedia={handleVideoStream}
    />
  );
};

export default WebcamComponent;