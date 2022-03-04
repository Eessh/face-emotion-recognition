import { ResponsiveBar } from "@nivo/bar";
import Spinner from "../Spinner/Spinner";
import "./RealTimeEmotion.css";

const RealTimeEmotion = ({ expressions, mountedVideoComponent }) => {

  const getTooltip = (data) => {
    // should only return HTML
    return (
      <span className="tooltip bg-bg-1 rounded-md text-xs p-1 border-solid border-2">{`${data.data.expression}: ${Math.round(data.data.percent)}%`}</span>
    );
  };

  return(
    expressions != null && mountedVideoComponent
    ? <ResponsiveBar
        data={expressions}
        keys={["percent"]}
        indexBy={"expression"}
        layout={"vertical"}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        borderRadius={10}
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
    : <Spinner />
  );
};

export default RealTimeEmotion;