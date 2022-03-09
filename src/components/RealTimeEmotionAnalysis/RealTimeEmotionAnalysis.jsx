import { ResponsiveAreaBump } from "@nivo/bump";
import { useDashboardContext } from "../Dashboard";
import Spinner from "../Spinner/Spinner";
import "./RealTimeEmotionAnalysis.css";

const RealTimeEmotionAnalysis = () => {

  const {
    recordedExpressions,
    mountedVideoComponent
  } = useDashboardContext();
  const getTooltip = (data) => {
    // should only return HTML
    return (
      <span className="tooltip bg-bg-1 rounded-md text-xs p-1 border-solid border-2">{`${data.data.expression}: ${Math.round(data.data.percent)}%`}</span>
    );
  };

  return(
    mountedVideoComponent
    ? <ResponsiveAreaBump
        data={recordedExpressions}
        // keys={["percent"]}
        // indexBy={"expression"}
        // layout={"vertical"}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        borderRadius={10}
        padding={0.4}
        // valueScale={{ type: "linear" }}
        // colors="#FE8F8F"
        // animate={true}
        // enableLabel={false}
        // axisTop={null}
        // axisRight={null}
        axisLeft={null}
        axisBottom={null}
        // tooltip={(data) => getTooltip(data)}
      />
    : <Spinner />
  );
};

export default RealTimeEmotionAnalysis;