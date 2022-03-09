import { ResponsiveStream } from "@nivo/stream";
import { useDashboardContext } from "../Dashboard";

const RealTimeEmotionAnalysis2 = () => {
  const {recordedExpressions2, expressions} = useDashboardContext();

  const data = [
    {
      neutral: 99,
      happy: 0.5,
      suprised: 0.5,
    },
    {
      neutral: 99,
      happy: 0.5,
      suprised: 0.5,
    },
    {
      neutral: 99,
      happy: 0.5,
      suprised: 0.5,
    },
    {
      neutral: 99,
      happy: 0.5,
      suprised: 0.5,
    },
  ];

  return(
    <ResponsiveStream
      data={data}
      keys={[
        "happy",
        "neutral",
        "suprised"
      ]}
    />
  );
};

export default RealTimeEmotionAnalysis2;