import logo from "../../../assets/images/logo.png";
import styleNavLogo from "../../../assets/styles/navbar/navLogo.module.css";
export const NavLogo = () => {
  const { header__logo } = styleNavLogo;
  return (
    <>
      <a
        href="/"
        aria-label="Logo Contact app que redirije a la pagina principal"
      >
        <img
          className={header__logo}
          src={logo}
          alt="Logo Contact app"
          title="Logo"
        />
      </a>
    </>
  );
};
