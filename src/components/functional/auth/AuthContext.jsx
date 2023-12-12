// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    // Make an API request to authenticate the user
    // Set the user state if authentication is successful
    setUser({ username: credentials.username, role: 'user' });
  };

  const logout = () => {
    // Perform logout actions (e.g., clear tokens, reset state)
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
