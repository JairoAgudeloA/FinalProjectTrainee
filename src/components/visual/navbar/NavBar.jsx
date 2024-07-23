import styleNavBar from "../../../assets/styles/navbar/navbar.module.css";
import { useForm } from "../../../hooks/useForm";
import { Form } from "../form/Form";
import { NavLogo, NavMenu } from "./";
export const NavBar = () => {
  const { header, header_container } = styleNavBar;
  const { isFormVisible } = useForm();
  return (
    <>
      <header className={header}>
        <div className={header_container}>
          <NavLogo />
          <NavMenu />
        </div>
      </header>
      {isFormVisible && <Form />}
    </>
  );
};
