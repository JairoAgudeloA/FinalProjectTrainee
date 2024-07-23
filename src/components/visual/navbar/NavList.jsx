import { NavLink } from "react-router-dom";
import styleNavlist from "../../../assets/styles/navbar/navList.module.css";

export const NavList = ({ linkName = "/", linkList, onCloseMenu }) => {
  const { activeButton, header__nav_link } = styleNavlist;
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `${header__nav_link} ${isActive ? activeButton : ""}`
        }
        to={linkName}
        onClick={onCloseMenu}
      >
        {linkList}
      </NavLink>
    </>
  );
};
