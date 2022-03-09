import VideoComponent from "../VideoComponent";
import RealTimeEmotion from "../RealTimeEmotion";
import "./Dashboard.css";

const Dashboard = () => {
  return(
    <div className="dashboard flex-1 w-full flex flex-row">
      <div className="dashboard-left videocomponent flex-1 flex flex-row items-center justify-center">
          <VideoComponent />
      </div>
      <div className="dashboard-right flex-1 realtime-emotion flex flex-row items-center justify-center h-full">
          <RealTimeEmotion />
      </div>
    </div>
  );
};

export default Dashboard;
