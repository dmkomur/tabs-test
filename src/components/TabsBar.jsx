import PropTypes from "prop-types";
import { TabsBarStyled } from "./TabsBar.styled";
import { Outlet } from "react-router-dom";
import { NavItem } from "./TabsBar.styled";
import { Suspense } from "react";

// using map for NavLinks to redirect and control the active tab

export const TabsBar = ({ tabsArr }) => {
  return (
    <>
      <TabsBarStyled>
        {tabsArr?.map((el) => (
          <li key={el.id}>
            <NavItem to={el.path}>{el.title}</NavItem>
          </li>
        ))}
      </TabsBarStyled>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

TabsBar.propTypes = {
  tabsArr: PropTypes.array,
};
