import PropTypes from "prop-types";

export const TabsBar = ({ tabsArr }) => {
  return (
    <div>
      {" "}
      im tabsbar
      {tabsArr?.map((el) => (
        <p key={el.id}> el.title</p>
      ))}
    </div>
  );
};

TabsBar.propTypes = {
  tabsArr: PropTypes.array,
};
