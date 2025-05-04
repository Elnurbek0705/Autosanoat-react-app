// context/AuthContext.jsx
import React, { createContext, useState, useContext } from "react";
import { registerUser, loginUser } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const register = async (userData) => {
    const result = await registerUser(userData);
    if (result) setCurrentUser(result);
  };

  const login = async (credentials) => {
    const user = await loginUser(credentials);
    if (user) setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
