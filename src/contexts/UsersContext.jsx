import React, { createContext, useEffect, useReducer } from "react";

// Reducer function
export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USERS":
      return action.payload;
    case "ADD_USER":
      return [...state, action.payload];
    case "REMOVE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "TOGGLE_FAVORITE":
      return state.map((user) =>
        user.id === action.payload
          ? { ...user, isFavorite: !user.isFavorite }
          : user
      );
    case "RESET_USERS":
      return action.payload;
    default:
      return state;
  }
};

// Context
export const UsersContext = createContext();

// Initial state from localStorage
const init = async () => {
  const localUsers = JSON.parse(localStorage.getItem("users")) || [];
  try {
    const response = await fetch(`https://reqres.in/api/users/?per_page=12`);
    const json = await response.json();
    const apiUsers = json.data.map((user) => ({
      ...user,
      isFavorite: false,
    }));

    // Combine local users with API users, avoiding duplicates
    const combinedUsers = [
      ...localUsers,
      ...apiUsers.filter(
        (apiUser) =>
          !localUsers.some((localUser) => localUser.id === apiUser.id)
      ),
    ];
    return combinedUsers;
  } catch (e) {
    console.error("Error fetching users", e);
    return localUsers;
  }
};

// Provider component
export const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(usersReducer, [], () => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    return localUsers;
  });

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users/?per_page=12`);
      const json = await response.json();
      const apiUsers = json.data.map((user) => ({
        ...user,
        isFavorite: false,
      }));

      const combinedUsers = [
        ...users,
        ...apiUsers.filter(
          (apiUser) => !users.some((localUser) => localUser.id === apiUser.id)
        ),
      ];
      dispatch({ type: "RESET_USERS", payload: combinedUsers });
    } catch (e) {
      console.error("Error fetching users", e);
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UsersContext.Provider value={{ users, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UserProvider;
