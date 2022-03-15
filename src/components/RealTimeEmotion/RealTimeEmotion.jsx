import { ResponsiveBar } from "@nivo/bar";
import { useDashboardContext } from "../Dashboard";
import Spinner from "../Spinner/Spinner";
import "./RealTimeEmotion.css";

/**
 * 
 * @returns Returns a Bar Chart Component with the percentages of each emotion.
 */
const RealTimeEmotion = () => {

  const { currentExpression, mountedVideoComponent } = useDashboardContext();

  /**
   * 
   * @param {object} data - Data of the expression which was hovered.
   * @returns {HTMLSpanElement} - Reutrns a <span> with the name of the expression which was hovered.
   */
  const getTooltip = (data) => {
    // should only return HTML
    return (
      <span className="tooltip bg-bg-1 rounded-md text-xs p-1 border-solid border-gray-500 border-2">{`${data.data.expression}: ${Math.round(data.data.percent)}%`}</span>
    );
  };

  return(
    currentExpression !== null && currentExpression !== undefined && mountedVideoComponent
    ? <ResponsiveBar
        data={currentExpression}
        keys={["percent"]}
        indexBy={"expression"}
        layout={"vertical"}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        borderRadius={7}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors="#FE8F8F"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Percentage",
          legendPosition: "middle",
          legendOffset: -40
        }}
        axisBottom={{
          legend: "Expression",
          legendPosition: "middle",
          legendOffset: 40
        }}
        tooltip={(data) => getTooltip(data)}
      />
    : <Spinner text={"Waiting for Webcam VideoStream"} />
  );
};

export default RealTimeEmotion;