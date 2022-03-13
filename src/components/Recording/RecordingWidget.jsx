import { Button } from "../AnimatedComponents";
import { useDashboardContext } from "../Dashboard";

const RecordingWidget = () => {

  const {recording, setRecording, setRecordedExpressionsVisible} = useDashboardContext();

  const handleStopRecording = () => {
    setRecording(false);
    setRecordedExpressionsVisible(true);
  }
  
  return(
    <span className="absolute top-4 right-4 z-10">
      <Button
        onClick={recording===true ? handleStopRecording : () => setRecording(true)}
      >
        <span className="rounded-lg border-none bg-fg-1 text-gray-700 text-base p-2">
          {recording===true ? "Stop Recording" : "Start Recording"}
        </span>
      </Button>
    </span>
  );
};

export default RecordingWidget;