import React, { useContext, useState } from "react";
import styleForm from "../../../assets/styles/form/form.module.css";
import { UsersContext } from "../../../contexts/UsersContext";

export const Form = () => {
  const { dispatch, fetchData } = useContext(UsersContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isFavorite: false,
  });

  const {
    form,
    form__input,
    form__label,
    label__input,
    form__button,
    icons__check,
    container,
  } = styleForm;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    const avatarUrl = data[0].url;

    const newUser = {
      id: Date.now(), // Generar un ID único basado en la fecha actual
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      isFavorite: formData.isFavorite,
      avatar: avatarUrl,
    };
    dispatch({ type: "ADD_USER", payload: newUser });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      isFavorite: false,
    });
  };

  return (
    <div className={container}>
      <form className={form} onSubmit={handleSubmit}>
        <input
          className={form__input}
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className={form__input}
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          className={form__input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label className={form__label} htmlFor="check">
          Enable like favorite
          <input
            className={label__input}
            type="checkbox"
            id="check"
            name="isFavorite"
            checked={formData.isFavorite}
            onChange={handleChange}
          />
          <span className={`material-icons ${icons__check}`}>check_box</span>
        </label>
        <button
          className={form__button}
          aria-label="Enviar formulario con los datos ingresados"
          type="submit"
        >
          SAVE
        </button>
      </form>
    </div>
  );
};
