import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TabsBarStyled = styled.ul`
  width: 1200px;
  margin: 0 auto;
  background-color: #455a64;
  display: flex;
  gap: 24px;
  padding: 16px 48px;
  border-radius: 8px;
`;

export const NavItem = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;

  color: #bdbdbd;
  &:hover,
  &:focus {
    color: #ffecb3;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    color: #ffecb3;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
