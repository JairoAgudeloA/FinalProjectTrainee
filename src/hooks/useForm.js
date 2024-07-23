import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export const useForm = () => {
  const { isFormVisible, handleToggleForm } = useContext(FormContext);

  return {
    isFormVisible,
    handleToggleForm,
  };
};
