import VideoComponent from "../VideoComponent";
import "./Dashboard.css";

const Dashboard = () => {
  return(
    <div className="dashboard">
      <div className="dashboard-left">
        <VideoComponent />
        <div className="realtime-emotion"></div>
      </div>
      <div className="dashboard-right">
        <div className="realtime-emotion-analysis"></div>
      </div>
    </div>
  );
};

export default Dashboard;