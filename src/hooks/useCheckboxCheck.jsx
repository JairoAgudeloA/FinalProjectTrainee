import { useEffect, useState } from "react";

export const useCheckboxCheck = () => {
  const [activeButton, setActiveButton] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      window.innerWidth >= 870 && setIsCheckboxChecked(false);
    };
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const closeCheckbox = ({ target }) => {
    setIsCheckboxChecked(target.checked);
  };

  const closeMenu = () => {
    setIsCheckboxChecked(false);
  };

  return {
    isCheckboxChecked,
    setIsCheckboxChecked,
    activeButton,
    setActiveButton,
    closeMenu,
    closeCheckbox,
  };
};
