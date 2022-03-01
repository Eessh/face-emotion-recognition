import { useCallback, useEffect, useRef } from "react";
import { detectFaces } from "../../utils/faceAPI";
import Webcam from "react-webcam";
import "./Webcam.css";

const VideoConstraints = {
  width: 1080,
  height: 720,
  facingMode: "user"
}

const WebcamComponent = () => {
  const webcamRef = useRef(null);

  useEffect(() => {
    const tick = setInterval(async () => {
      await getFaces();
    }, 1000);
    return() => {
      clearInterval(tick);
    }
  }, []);

  const getFaces = useCallback(async () => {
    if (webcamRef.current != null) {
      const faces = detectFaces(webcamRef.current.video);
    }
  }, [webcamRef]);

  const handleVideoStream = useCallback((stream) => {
    // TODO
  }, [webcamRef]);

  return(
    <Webcam
      audio={false}
      ref={webcamRef}
      videoConstraints={VideoConstraints}
      onUserMedia={handleVideoStream}
    />
  );
};

export default WebcamComponent;