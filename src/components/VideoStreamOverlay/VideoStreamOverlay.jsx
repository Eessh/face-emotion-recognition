import { useDashboardContext } from "../Dashboard";
import "./VideoStreamOverlay.css";

/**
 * 
 * @returns Returns Canvas element which will be on top of VideoStream Component.
 */
const VideoStreamOverlay = () => {
  const { canvasRef } = useDashboardContext();

  return(
    <canvas className="absolute left-0 top-0 shadow-2xl m-4" ref={canvasRef}></canvas>
  );
};

export default VideoStreamOverlay;