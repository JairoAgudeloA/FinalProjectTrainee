import iconoPlus from "../../../assets/images/+.png";
import styleNavButton from "../../../assets/styles/navbar/navButton.module.css";
import { useForm } from "../../../hooks/useForm";

export const NavButton = ({ onCloseMenu }) => {
  const { header__nav_button, header__nav_button_img } = styleNavButton;
  const { handleToggleForm } = useForm();

  const handleLinkClick = () => {
    onCloseMenu();
    handleToggleForm();
  };

  return (
    <div>
      <button
        className={header__nav_button}
        aria-label="Crear un nuevo favorito"
        onClick={handleLinkClick}
      >
        <img className={header__nav_button_img} src={iconoPlus} />
        NEW
      </button>
    </div>
  );
};
