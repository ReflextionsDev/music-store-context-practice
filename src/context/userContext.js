import React, { createContext, useContext, useState } from 'react';

export const userContext = createContext();

export const useUser = () => useContext(userContext);

function UserProvider({ children }) {

  const userData = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    favorites: [],
  }

  const [user, setUser] = useState(userData);

  const login = (data) => {
    setUser(data)
  }

  return (
    <userContext.Provider value={{ user, login }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;