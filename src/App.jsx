import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/visual/navbar/NavBar.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import Overview from "./pages/Overview.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
}

export default App;
