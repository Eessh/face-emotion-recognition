import VideoComponent from "../VideoComponent";
import RealTimeEmotion from "../RealTimeEmotion";
import {Settings} from "../Settings";
import "./Dashboard.css";

const Dashboard = () => {
  return(
    <div className="dashboard flex-1 w-full flex flex-row">
      <div className="dashboard-left videocomponent flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col w-fit">
          <VideoComponent />
          <Settings />
        </div>
      </div>
      <div className="dashboard-right flex-1 realtime-emotion flex flex-row items-center justify-center h-full">
          <RealTimeEmotion />
      </div>
    </div>
  );
};

export default Dashboard;
