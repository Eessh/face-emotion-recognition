import VideoStream from "../VideoStream";
import VideoStreamOverlay from "../VideoStreamOverlay";
import "./VideoComponent.css";

const VideoComponent = ({ clockTicks, setClockTicks, info, setInfo, setRecordedExpressions, getFormattedExpressions, setMountedVideoComponent }) => {
  return(
    <>
      <VideoStream
        clockTicks={clockTicks}
        setClockTicks={setClockTicks}
        setInfo={setInfo}
        setRecordedExpressions={setRecordedExpressions}
        getFormattedExpressions={getFormattedExpressions}
        setMountedVideoComponent={setMountedVideoComponent}
      />
      <VideoStreamOverlay info={info} />
    </>
  );
};

export default VideoComponent;