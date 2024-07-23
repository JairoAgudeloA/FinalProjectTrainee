import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <FormContext.Provider value={{ handleToggleForm, isFormVisible }}>
      {children}
    </FormContext.Provider>
  );
};
