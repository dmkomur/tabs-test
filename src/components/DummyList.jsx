import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { TabHeader } from "./Header.styled";

// We receive community data through props. select the required part thank  path

export const DummyList = ({ tabsArr }) => {
  const location = useLocation();
  const currentData = tabsArr.find((el) => location.pathname.includes(el.path));

  return (
    <div style={{ backgroundColor: "#B2DFDB" }}>
      <TabHeader>{currentData?.title}</TabHeader>
      <h3>our List will be here</h3>

      <ol>
        <li>{currentData?.order}</li>
        <li>{currentData?.path}</li>
      </ol>
    </div>
  );
};

export default DummyList;

DummyList.propTypes = {
  tabsArr: PropTypes.array,
};
