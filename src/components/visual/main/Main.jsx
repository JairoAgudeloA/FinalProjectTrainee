import React, { useContext } from "react";
import { UsersContext } from "../../../contexts/UsersContext";
import { Card } from "../cards/Card";
import styleContactsPage from "../../../pages/styles/pages.module.css";

const Main = () => {
  const { users } = useContext(UsersContext);
  const favoriteContacts = users
    .filter((contact) => contact.isFavorite)
    .slice(0, 4);
  const regularContacts = users
    .filter((contact) => !contact.isFavorite)
    .slice(0, 6);

  const { sectionLabel, sectionHr, main, container__card } = styleContactsPage;
  return (
    <main className={main}>
      <section>
        <label className={sectionLabel}>
          <p>Favorites</p>
          <hr className={sectionHr} />
        </label>
        <div className={container__card}>
          {favoriteContacts.map((contact) => (
            <Card
              key={contact.id}
              id={contact.id}
              img={contact.avatar}
              name={contact.first_name}
              lastName={contact.last_name}
              email={contact.email}
              isFavorite={contact.isFavorite}
              page="overview"
            />
          ))}
        </div>
      </section>
      <section>
        <label className={sectionLabel}>
          <p>Contact List</p>
          <hr className={sectionHr} />
        </label>
        <div className={container__card}>
          {regularContacts.map((contact) => (
            <Card
              key={contact.id}
              id={contact.id}
              img={contact.avatar}
              name={contact.first_name}
              lastName={contact.last_name}
              email={contact.email}
              isFavorite={contact.isFavorite}
              page="overview"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
