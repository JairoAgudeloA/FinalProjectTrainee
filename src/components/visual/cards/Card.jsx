import React, { useContext } from "react";
import styleCard from "../../../assets/styles/cards/card.module.css";
import { UsersContext } from "../../../contexts/UsersContext";
import { icoClose, icoDelete, icoFavorite } from "../../../assets/images";

export const Card = ({ id, img, name, lastName, email, isFavorite, page }) => {
  const { dispatch } = useContext(UsersContext);

  const {
    card,
    card__name,
    card__email,
    card__img,
    card__img_favorite,
    card__Contact__actions,
    container_ico,
    container_ico_favorite,
    container_ico_delete,
  } = styleCard;

  const handleFavoriteClick = () => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: id });
  };

  const handleRemoveClick = () => {
    dispatch({ type: "REMOVE_USER", payload: id });
  };

  return (
    <article className={card}>
      <img
        src={img}
        alt={`${name} ${lastName}`}
        className={`${card__img}${isFavorite ? ` ${card__img_favorite}` : ""}`}
      />
      <p className={card__name}>{`${name} ${lastName}`}</p>
      <p className={card__email}>{email}</p>
      <section className={card__Contact__actions}>
        <div
          onClick={handleFavoriteClick}
          className={`${container_ico} ${
            isFavorite ? `${container_ico_favorite}` : ""
          }`}
        >
          {isFavorite ? (
            <img src={icoClose} alt="Remove from favorites" />
          ) : (
            <img src={icoFavorite} alt="Add to favorites" />
          )}
        </div>
        {page === "contacts" && (
          <div onClick={handleRemoveClick} className={container_ico_delete}>
            <img src={icoDelete} alt="Remove contact" />
          </div>
        )}
      </section>
    </article>
  );
};
