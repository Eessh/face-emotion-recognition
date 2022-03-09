import VideoComponent from "../VideoComponent";
import RealTimeEmotion from "../RealTimeEmotion";
import "./Dashboard.css";

const Dashboard = () => {
  return(
    <div className="dashboard flex-1 w-full flex flex-row">
      <div className="dashboard-left flex-1 flex flex-row items-center justify-center">
        <div className="videocomponent">
          <VideoComponent />
        </div>
      </div>
      <div className="dashboard-right flex-1">
        <div className="realtime-emotion flex flex-row items-center justify-center h-full">
          <RealTimeEmotion />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;