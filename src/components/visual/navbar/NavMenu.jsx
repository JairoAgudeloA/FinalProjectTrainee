import buttonMenu from "../../../assets/images/button_menu.svg";
import styleNavMenu from "../../../assets/styles/navbar/navMenu.module.css";
import { useCheckboxCheck } from "../../../hooks/useCheckboxCheck.jsx";
import { NavList, NavButton } from "./";

export const NavMenu = () => {
  const { closeCheckbox, closeMenu, isCheckboxChecked } = useCheckboxCheck();

  const {
    header__checkbox,
    header__open_nav_button,
    header__open_nav_button_img,
    header__nav_list,
    header__nav,
  } = styleNavMenu;

  return (
    <>
      <input
        type="checkbox"
        className={header__checkbox}
        id="open-menu"
        checked={isCheckboxChecked}
        onChange={closeCheckbox}
      ></input>
      <label
        htmlFor="open-menu"
        className={header__open_nav_button}
        role="button"
      >
        <img className={header__open_nav_button_img} src={buttonMenu} />
      </label>
      <nav className={header__nav}>
        <ul className={header__nav_list}>
          <NavList linkList={"Overview"} onCloseMenu={closeMenu} />
          <NavList
            linkName={"contacts"}
            linkList={"contacts"}
            onCloseMenu={closeMenu}
          />
          <NavList
            linkName={"favorites"}
            linkList={"Favorites"}
            onCloseMenu={closeMenu}
          />
          <NavButton onCloseMenu={closeMenu} />
        </ul>
      </nav>
    </>
  );
};
