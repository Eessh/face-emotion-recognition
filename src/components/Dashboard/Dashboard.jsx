import { AnimatePresence } from "framer-motion";
import VideoComponent from "../VideoComponent";
import RealTimeEmotion from "../RealTimeEmotion";
import { useDashboardContext } from "./DashboardContext";
import {Settings, SettingsModal, useSettingsContext} from "../Settings";
import RecordedExpressionsModal from "../Recording";
import "./Dashboard.css";

const Dashboard = () => {

  const {recordedExpressionsVisible} = useDashboardContext();
  const {settingsVisible} = useSettingsContext();

  return(
    <div className="dashboard min-h-screen min-w-full bg-bg-1 flex-1 w-full flex flex-col md:flex-row">
      <div className="dashboard-left videocomponent flex-1 flex flex-col items-center justify-center mt-16 md:mt-0">
        <div className="flex flex-col w-fit relative">
          <VideoComponent />
          <Settings />
        </div>
      </div>
      <div className="dashboard-right flex-1 flex flex-col items-center justify-center my-16 md:my-0">
        <div className="realtime-emotion flex flex-col items-center justify-center w-[400px] h-[300px] sm:w-[600px] sm:-h[400px] md:w-[700px] md:h-[450px] lg:w-[900px] lg:h-[700px]">
          <RealTimeEmotion />
        </div>
      </div>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {settingsVisible && <SettingsModal />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {window.innerWidth >= 870 && recordedExpressionsVisible && <RecordedExpressionsModal />}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
