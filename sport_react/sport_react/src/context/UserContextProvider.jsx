import React, { createContext, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const [user, setUser] = {
  u_userid: "",
  u_password: "",
};

const props = {};

const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
