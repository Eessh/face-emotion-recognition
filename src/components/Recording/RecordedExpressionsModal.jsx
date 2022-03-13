import { useRef } from "react";
import { ResponsiveAreaBump } from "@nivo/bump";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import { Button, Modal } from "../AnimatedComponents";
import { CloseIcon } from "../Icons";
import { useDashboardContext } from "../Dashboard";
import "./RecordedExpressionsModal.css";

const RecordedExpressionsModal = () => {

  const chartRef = useRef(null);
  const {recordedExpressions, setRecordedExpressions, setRecordedExpressionsVisible} = useDashboardContext();

  const handleModalClose = () => {
    setRecordedExpressions([]);
    setRecordedExpressionsVisible(false);
  };

  const getTooltip = (data) => {
    // console.log("data: ", data);
    // should only return HTML
    return (
      <span className="tooltip bg-bg-1 rounded-md text-sm p-1 border-solid border-gray-600 border-2">{`${data.serie.id}`}</span>
    );
  };

  const downloadChart = () => {
    html2canvas(chartRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [800, 600]
      });
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("record.pdf");
    });
  };

  return(
    <Modal
      backdropClickEvent={handleModalClose}
      extraClasses={"w-[80%] h-fit"}
    >
      <div className="w-full flex flex-row items-center justify-between mb-4">
        <span className="text-gray-600 text-2xl ml-2">Recorded Expressions</span>
        <Button onClick={handleModalClose}>
          <span
            className="rounded-full p-[0.125rem] mr-1 cursor-pointer transition-all hover:scale-110 bg-fg-1 hover:bg-fg-2"
          >
            <CloseIcon />
          </span>
        </Button>
      </div>
      <pre className="text-lg p-2 bg-fg-1 rounded-lg"><code>X-axis: Time Elapsed, Y-axis: Emotions</code></pre>
      <div className="chart" ref={chartRef}>
        <ResponsiveAreaBump
          data={recordedExpressions}
          keys={["percent"]}
          indexBy={"expression"}
          // layout={"vertical"}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          borderRadius={10}
          padding={0.4}
          spacing={10}
          // valueScale={{ type: "linear" }}
          // colors="#FE8F8F"
          // animate={true}
          // enableLabel={false}
          axisTop={null}
          // axisRight={null}
          // axisLeft={null}
          axisBottom={null}
          tooltip={(data) => getTooltip(data)}
        />
      </div>
      <Button
        onClick={downloadChart}
      >
        <span className="p-2 bg-fg-1 rounded-lg text-gray-700 text-base">Download</span>
      </Button>
    </Modal>
  );
};

export default RecordedExpressionsModal;