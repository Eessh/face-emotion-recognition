import VideoComponent from "../VideoComponent";
import RealTimeEmotion from "../RealTimeEmotion";
import {Settings, SettingsModal, useSettingsContext} from "../Settings";
import "./Dashboard.css";

const Dashboard = () => {

  const {settingsVisible} = useSettingsContext();

  return(
    <div className="dashboard flex-1 w-full flex flex-row">
      <div className="dashboard-left videocomponent flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col w-fit relative">
          <VideoComponent />
          <Settings />
        </div>
      </div>
      <div className="dashboard-right flex-1">
        <div className="realtime-emotion flex flex-row items-center justify-center h-full">
          <RealTimeEmotion />
        </div>
      </div>
      {settingsVisible && <SettingsModal />}
    </div>
  );
};

export default Dashboard;
