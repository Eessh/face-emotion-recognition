import VideoComponent from "../VideoComponent";
import RealTimeEmotion from "../RealTimeEmotion";
import RealTimeEmotionAnalysis from "../RealTimeEmotionAnalysis";
import "./Dashboard.css";

const Dashboard = () => {
  return(
    <div className="dashboard flex-1 w-full flex flex-row">
      <div className="dashboard-left w-fit flex flex-col">
        <div className="videocomponent flex-1">
          <VideoComponent />
        </div>
        <div className="realtime-emotion flex flex-row items-center justify-center h-full">
          <RealTimeEmotion />
        </div>
      </div>
      <div className="dashboard-right flex-1">
        <div className="realtime-emotion-analysis w-full h-full">
          <RealTimeEmotionAnalysis />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;