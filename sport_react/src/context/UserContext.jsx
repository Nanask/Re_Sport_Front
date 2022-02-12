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

const UserContext = ({ children }) => {
  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
};

export default UserContext;
