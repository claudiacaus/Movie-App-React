import React, { useState, createContext } from 'react';

export const Context = createContext();

// the provider is the component that will be used to wrap the entire app, the children is the App component
const UserProvider = ({ children }) => {
  const [state, setState] = useState(undefined); // this is the state of the user, undefined means no user logged in

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default UserProvider;
