import React, { useContext, useState } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { Card } from "../components/visual/cards/Card";
import Pagination from "../components/visual/pagination/Pagination";
import styleFavorites from "./styles/pages.module.css";

const FavoritesPage = () => {
  const { users } = useContext(UsersContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const favoriteUsers = users.filter((contact) => contact.isFavorite);
  const totalPages = Math.ceil(favoriteUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = favoriteUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const { main, sectionLabel, sectionHr, container__card, pagination } =
    styleFavorites;

  return (
    <main className={main}>
      <label className={sectionLabel}>
        <p>Favorites</p>
        <hr className={sectionHr} />
      </label>
      <div className={container__card}>
        {currentUsers.map((contact) => (
          <Card
            key={contact.id}
            id={contact.id}
            img={contact.avatar}
            name={contact.first_name}
            lastName={contact.last_name}
            email={contact.email}
            isFavorite={contact.isFavorite}
            page="favorites"
          />
        ))}
      </div>
      <div className={pagination}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
};

export default FavoritesPage;
