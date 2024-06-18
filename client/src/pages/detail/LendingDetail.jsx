import "./detail.scss";
import lendingDetail from "../../lib/lendingDetailData";
import Slider from "./Slider";

const LendingDetail = () => {
  return (
    <div className="detailpage">
      <Slider data={lendingDetail} />
      <div className="left-section"></div>

      <div className="right-section"></div>
    </div>
  );
};

export default LendingDetail;
