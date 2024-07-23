import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "typeface-roboto";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UsersContext.jsx";
import { FormProvider } from "./contexts/FormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </UserProvider>
  </BrowserRouter>
);
