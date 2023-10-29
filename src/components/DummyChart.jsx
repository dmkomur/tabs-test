import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { TabHeader } from "./Header.styled";

// We receive community data through props. select the required part thank  path

export const DummyChart = ({ tabsArr }) => {
  const location = useLocation();
  const currentData = tabsArr.find((el) => location.pathname.includes(el.path));

  return (
    <div style={{ backgroundColor: "#FFF9C4" }}>
      <TabHeader>{currentData?.title}</TabHeader>

      <ul>
        <h3>our Chart will be here</h3>
        <li>{currentData?.order}</li>
        <li>{currentData?.path}</li>
      </ul>
    </div>
  );
};

export default DummyChart;

DummyChart.propTypes = {
  tabsArr: PropTypes.array,
};
